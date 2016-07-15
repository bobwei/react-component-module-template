/* eslint-disable max-len */

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  entry: './src/index.js',
  output: {
    path: './lib',
    filename: 'index.js',
    libraryTarget: 'umd',
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&localIdentName=[local]__[hash:base64:5]!sass-loader'),
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('index.css'),
  ],
};

module.exports = config;
