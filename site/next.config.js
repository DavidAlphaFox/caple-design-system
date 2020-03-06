require('dotenv').config();

const path = require('path');
const webpack = require('webpack');
const withPlugins = require('next-compose-plugins');
const withCss = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
const withImages = require('next-images');
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [require('remark-attr'), require('remark-emoji')],
  },
});

const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const nextConfig = {
  env: {
    baseURL: process.env.BASE_URL || 'http://api.dev.caple.ai:8080',
  },
  webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlugin(process.env));

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack', 'url-loader'],
    });

    config.resolve.alias = {
      '@components': path.join(__dirname, 'components'),
      '@utils': path.join(__dirname, 'utils'),
      '@assets': path.join(__dirname, 'assets'),
      '@layouts': path.join(__dirname, 'layouts'),
      ...config.resolve.alias,
    };

    if (config.resolve.plugins) {
      config.resolve.plugins.push(new TsconfigPathsPlugin());
    } else {
      config.resolve.plugins = [new TsconfigPathsPlugin()];
    }

    return config;
  },
  exportPathMap: function(defaultPathMap) {
    const pathMap = Object.assign({}, defaultPathMap);
    delete pathMap['/index'];
    return pathMap;
  },
};

module.exports = withPlugins(
  [
    withImages,
    [
      withMDX,
      {
        pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
      },
    ],
    [
      withCss,
      {
        importLoaders: 1,
        localIdentName: '[local]___[hash:base64:5]',
      },
    ],
    [
      withSass,
      {
        cssModules: true,
        sassLoaderOptions: {
          sourceMap: true,
        },
      },
    ],
  ],
  nextConfig,
);
