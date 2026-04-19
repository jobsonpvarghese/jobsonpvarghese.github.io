/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true
  },
  allowedDevOrigins: ['10.0.0.139'],
}

module.exports = nextConfig
