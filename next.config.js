/** @type {import('next').NextConfig} */
const withAntdLess = require('next-plugin-antd-less');

const nextConfig = withAntdLess({
  modifyVars: {
    '@primary-color': '#dcd100',
  }, // optional
  lessVarsFilePath: './src/styles/variables.less', // optional
  lessVarsFilePathAppendToEndOfContent: false, // optional

  nextjs: {
    localIdentNameFollowDev: true,
  },
  images: {
    domains: ['cdn.officeshoes.ws'],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
});

module.exports = nextConfig;
