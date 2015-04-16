var webpack = require('webpack');

module.exports = {
  context: __dirname + '/app',
  entry: './index.js',
  output: {
    path: __dirname + '/app',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ],
  module: {
    loaders: [
      { test: /\.js$/,    loader: 'babel', exclude: '/node_modules' },
      { test: /\.html$/,  loader: 'raw', exclude: '/node_modules' },
      { test: /\.less$/,  loader: 'style!css!less', exclude: '/node_modules' },
      { test: /\.woff$/,  loader: 'url-loader?limit=10000&mimetype=application/font-woff' },
      { test: /\.woff2$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff' },
      { test: /\.ttf$/,   loader: 'file' },
      { test: /\.eot$/,   loader: 'file' },
      { test: /\.svg$/,   loader: 'file' },
    ]
  }
}
