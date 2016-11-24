const webpack = require('webpack');

module.exports = function karmaConfig(config) {
  config.set({

    files: [
      'node_modules/angular/angular.js',
      'node_modules/angular-ui-router/release/angular-ui-router.js',
      'node_modules/angular-ui-router/release/stateEvents.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'app/**/*.js',
    ],

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['Chrome'],

    plugins: [
      'karma-chrome-launcher',
      'karma-jasmine',
      'karma-junit-reporter',
      'karma-webpack',
      'karma-sourcemap-loader',
    ],

    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit',
    },

    preprocessors: {
      'app/**/*.js': ['webpack', 'sourcemap'],
    },

    webpack: {
      devtools: 'inline-source-map',
      plugins: [
        new webpack.ProvidePlugin({
          $: 'jquery',
          jQuery: 'jquery',
        }),
      ],
      module: {
        loaders: [
          { test: /\.js$/, loader: 'babel', exclude: 'node_modules' },
          { test: /\.html$/, loader: 'raw', exclude: 'node_modules' },
          { test: /\.less$/, loader: 'null' },
          { test: /\.(woff|woff2)$/, loader: 'null' },
          { test: /\.(ttf|eot|svg)$/, loader: 'null' },
        ],
      },
    },

    webpackMiddleware: {
      stats: 'errors-only',
    },

  });
};
