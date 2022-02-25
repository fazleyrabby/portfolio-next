/** @type {import('next').NextConfig} */
require('dotenv').config()
const webpack = require('webpack')

const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.plugins.push(
      new webpack.EnvironmentPlugin(process.env)
    )
    return config
  }
}

module.exports = nextConfig
