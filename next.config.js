const withTypescript = require('@zeit/next-typescript')
const withSass = require('@zeit/next-sass')
const webpack = require('webpack')

module.exports = withTypescript(
  withSass({
    webpack: (config, { dev }) => {
      config.plugins.push(
        new webpack.DefinePlugin({
          NEXT_ENV: dev ? JSON.stringify('development') : JSON.stringify('production'),
        }),
      )

      return config
    },
    cssModules: true,
  }),
)
