/** @type {import("next").NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  typescript: { tsconfigPath: "tsconfig.pages.json" },
};

export default nextConfig;