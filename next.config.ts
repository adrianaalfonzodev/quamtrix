import type { NextConfig } from 'next'
import { i18n as i18nConfig } from './next-i18next.config'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: i18nConfig
}

export default nextConfig
