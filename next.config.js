const { withNextVideo } = require('next-video/process')

/** @type {import('next').NextConfig} */
const withMDX = require('@next/mdx')()
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
      {
        protocol: "https",
        hostname: "api2.pixelayout.site",
        port: "",
      },
      {
        protocol: "https",
        hostname: "pixelayout.site",
        port: "",
      },
    ],
  },
}

module.exports = withMDX(nextConfig)
