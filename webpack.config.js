const { resolve } = require('path');

const webpack = require('webpack');

// plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {

  return {
    context: resolve('./'),
    entry: {
      app: './main.js'
    },
    output: {
      filename: 'bundle.js',
      path: resolve('dist'),
      // Include comments with information about the modules.
      pathinfo: true,
    },

    resolve: {
        extensions: [
            '.js',
            '.ts',
            '.tsx'
        ]
    },

    module: {
      loaders: [],
    },

    plugins: [

      new HtmlWebpackPlugin({
        template: resolve('index.html')
      })

    ]

  }
};