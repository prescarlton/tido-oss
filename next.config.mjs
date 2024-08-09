/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    prependData: `@import "./_mantine.scss";`,
  },
  experimental: {
    optimizePackageImports: ['@mantine/core', '@mantine/hooks'],
    serverComponentsExternalPackages: ['@node-rs/argon2'],
  },
}

export default nextConfig
