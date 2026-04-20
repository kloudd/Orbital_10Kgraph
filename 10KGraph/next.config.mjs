/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  env: {
    NEXT_PUBLIC_SHEETS_WEBHOOK_URL: process.env.NEXT_PUBLIC_SHEETS_WEBHOOK_URL || "",
  },
};

export default nextConfig;
