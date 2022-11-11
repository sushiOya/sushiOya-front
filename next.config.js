/** @type {import("next").NextConfig} */
const withImages = require('next-images');
const withPlugins = require('next-compose-plugins');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = withPlugins(
  [
    (nextConfig) =>
      withImages(nextConfig, {
        poweredByHeader: false,
      }),
    (nextConfig) => nextConfig,
  ],
  {
    images: {
      disableStaticImages: true,
    },
  }
);
