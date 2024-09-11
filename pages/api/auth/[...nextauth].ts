import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth, { AuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import prisma from "@/app/libs/prismadb";

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Invalid Credentials');
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!user || !user?.hashedPassword) {
          throw new Error('Invalid Credentials');
        }

        const isCorrectPassword = await bcrypt.compare(
          credentials.password,
          user.hashedPassword
        );

        if (!isCorrectPassword) {
          throw new Error('Invalid Credentials');
        }

        return user;
      },
    }),
  ],

  pages: {
    signIn: '/',
  },
  debug: process.env.NODE_ENV === 'development',
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    async signIn({ account, profile, user }) {
      try {
        // Check if the user exists
        const existingUser = await prisma.user.findUnique({
          where: { email: user.email },
          include: { accounts: true },
        });

        if (existingUser) {
          // Check if the provider account is already linked
          const isAccountLinked = existingUser.accounts.some(
            (acc) => acc.provider === account.provider && acc.providerAccountId === account.providerAccountId
          );

          if (isAccountLinked) {
            // User exists and account is already linked
            return true;
          } else {
            // Link the new provider account to the existing user
            await prisma.account.create({
              data: {
                userId: existingUser.id,
                provider: account.provider,
                providerAccountId: account.providerAccountId,
                access_token: account.access_token || "",
                refresh_token: account.refresh_token || "",
                expires_at: account.expires_at || null,
                type: account.type || 'oauth', // Ensure 'type' is set
                token_type: account.token_type || "",
                scope: account.scope || "",
                id_token: account.id_token || "",
                session_state: account.session_state || "",
              },
            });

            return true;
          }
        } else {
          // User does not exist, create new user
          await prisma.user.create({
            data: {
              email: user.email,
              name: user.name,
              image: user.image,
              accounts: {
                create: {
                  provider: account.provider,
                  providerAccountId: account.providerAccountId,
                  access_token: account.access_token || "",
                  refresh_token: account.refresh_token || "",
                  expires_at: account.expires_at || null,
                  type: account.type || 'oauth', // Ensure 'type' is set
                  token_type: account.token_type || "",
                  scope: account.scope || "",
                  id_token: account.id_token || "",
                  session_state: account.session_state || "",
                },
              },
            },
          });

          return true;
        }
      } catch (error) {
        console.error('Error in signIn callback:', error);
        return false;
      }
    },
  },
};

export default NextAuth(authOptions);
