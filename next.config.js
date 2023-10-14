/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["localhost", "www.hits.link", "api.faviconkit.com", "github.com", "https://hits.hop.sh"],
  },
  async redirects() {
    return [
      {
        source: "/hits",
        destination: "https://hits.hop.sh/v1/hits",
        permanent: true,
      },
    ];
  },
}

module.exports = nextConfig
