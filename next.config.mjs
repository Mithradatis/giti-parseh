import path from 'path'
import donEnv from 'dotenv'
import { fileURLToPath } from 'url'

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const { parsed: localEnv } = donEnv.config({
  path: `./.env.${process.env.NODE_ENV}`,
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  i18n: {
    locales: ['en-US', 'fa-IR'],
    defaultLocale: 'en-US',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: process.env.NEXT_PUBLIC_DOMAINS,
      },
      {
        protocol: 'http',
        hostname: process.env.NEXT_PUBLIC_DOMAINS,
      },
    ],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  env: {
    APP_TITLE: process.env.NEXT_PUBLIC_APP_TITLE,
    APP_DESCRIPTION: process.env.NEXT_PUBLIC_APP_DESCRIPTION,
    API_URL: process.env.NEXT_PUBLIC_APP_URL,
    API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
  pageExtensions: ['tsx', 'js'],
  async redirects() {
    return [
      {
        source: '/',
        destination: '/en',
        permanent: true,
      },
    ]
  },
  webpack: (config, { dev, isServer }) => {
    config.resolve.alias.canvas = false
    if (!dev && !isServer) {
      config.devtool = 'source-map'
    }

    return config
  },
}

export default nextConfig
