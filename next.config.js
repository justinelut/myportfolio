/** @type {import('next').NextConfig} */
const nextConfig = {
     // Configure `pageExtensions` to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],

  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.pixelayout.site",
        port: "",
      },
    ],
  },
}

module.exports = nextConfig
