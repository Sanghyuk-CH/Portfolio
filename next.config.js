/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    // ignoreBuildErrors: true,
  },

  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg/,
      use: ['@svgr/webpack'],
    });

    return config;
  },

  experimental: {
    outputStandalone: true,
  },
};
