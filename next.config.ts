import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: '/perguntas',
        destination: '/faq',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
