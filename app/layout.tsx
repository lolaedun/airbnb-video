import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import ClientOnly from "./components/ClientOnly";
import RegisterModal from "./components/modals/RegisterModal";
import LoginModal from "./components/modals/LoginModal";
import ToasterProvider from "./providers/ToasterProvider"
import getCurrentUser from "./actions/getCurrentUser";
import RentModal from "./components/modals/RentModal";


const font = Nunito({
   subsets: ["latin"] 
  });

export const metadata: Metadata = {
  title: "Lolas Home",
  description: "Airbnb clone by Lola Edun",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <RentModal  />
          <LoginModal  />
          <RegisterModal  />
          <Navbar currentUser={currentUser}/>
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
