/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
        pathname: '/dasilvawill.png',
      },
    ],
  },
  experimental: {
    appDir: true,
  },
  async redirects() {
    return []
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Ignorar erros de build
    if (!isServer) {
      config.module.rules.push({
        test: /_error\.js$/,
        use: {
          loader: 'ignore-loader',
        },
      })
    }
    return config
  },
}

export default nextConfig
