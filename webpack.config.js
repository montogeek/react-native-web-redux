'use strict';

var webpack = require('webpack')

module.exports = {
  output: {
    filename: 'assets/main.js',
    publicPath: '/assets/'
  },
  cache: true,
  debug: true,
  devtool: false,
  entry: './index.js',
  stats: {
    colors: true,
    reasons: true
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'stage-0', 'react']
      }
    }]
  }
};