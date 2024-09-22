/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "pm-s3-images-3.s3.amazonaws.com",
          port: "",
          pathname: "/**",
        }
      ]
    }
  };
  
  export default nextConfig;