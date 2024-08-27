/** @type {import('next').NextConfig} */
const nextConfig = {
      images: {
            remotePatterns: [
                  {
                        hostname: "images.unsplash.com"
                  },
                  {
                        hostname: "www.fishipedia.fr"
                  },
                  {
                        hostname: "pescarte.org.br"
                  }
            ]
      }
}

module.exports = nextConfig
