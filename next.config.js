/** @type {import('next').NextConfig} */
const withAntdLess = require('next-plugin-antd-less');

const nextConfig = withAntdLess({
  modifyVars: {}, // optional
  lessVarsFilePath: './src/styles/variables.less', // optional 
  lessVarsFilePathAppendToEndOfContent: false, // optional

  nextjs: {
    localIdentNameFollowDev: true,
  },
});

module.exports = nextConfig
