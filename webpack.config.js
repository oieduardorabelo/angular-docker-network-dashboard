const webpack = require('webpack');
const nodePath = require('path');

const path = dir => nodePath.join(__dirname, dir);

module.exports = {
  devtool: 'inline-source-map',
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
      { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
      { test: /\.html$/, use: 'raw-loader', exclude: /node_modules/ },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.(woff|woff2)$/,
        use: 'url-loader?limit=10000&mimetype=application/font-woff',
      },
      { test: /\.(ttf|eot|svg)$/, use: 'file-loader' },
    ],
  },
};
