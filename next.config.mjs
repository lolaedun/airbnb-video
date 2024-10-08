/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      appDir: true,
    },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'avatars.githubusercontent.com',
          port: '',
          pathname: '/u/**',
        },
        {
          protocol: 'https',
          hostname: 'lh3.googleusercontent.com', // Google user profile images
          port: '',
          pathname: '/**',
        },
      ],
    },
  };
  
  export default nextConfig;
  