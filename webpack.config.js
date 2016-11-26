const webpack = require('webpack');
const nodePath = require('path');

const path = dir => nodePath.join(__dirname, dir);

module.exports = {
  devtools: 'inline-source-map',
  context: path('/app'),
  entry: './index.js',
  output: {
    path: path('/dist'),
    publicPath: '/dist',
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
  ],
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
      { test: /\.html$/, loader: 'raw', exclude: /node_modules/ },
      { test: /\.less$/, loader: 'style!css!less', exclude: /node_modules/ },
      { test: /\.(woff|woff2)$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff' },
      { test: /\.(ttf|eot|svg)$/, loader: 'file' },
    ],
  },
};
