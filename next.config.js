/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  future: {
    webpack5: true,
  },
  webpack: (config, { dev }) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };
    config.experiments = {
      asyncWebAssembly: true,
    };
    return config;
  },
};

module.exports = nextConfig;
