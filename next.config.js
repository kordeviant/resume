const withBuilderDevTools = require('@builder.io/dev-tools/next')();

/** @type {import('next').NextConfig} */
const nextConfig = withBuilderDevTools({
  experimental: {
    webpackBuildWorker: true,
  },
  webpack: (config) => {
    config.module.rules.push(
      ...[
        {
          test: /\.ya?ml$/,
          use: 'js-yaml-loader',
        },
        {
          test: /\.svg$/,
          use: '@svgr/webpack',
        },
      ]
    );
    return config;
  },
});

module.exports = nextConfig;
