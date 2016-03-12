'use strict';

const Webpack = require('webpack');
const Path = require('path');

let webpackConfig = require('./webpack.config.js');
let prodConfig = Object.assign({}, webpackConfig);

const prodPlugins = [
    new Webpack.optimize.OccurenceOrderPlugin(),

    new Webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),

    new Webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
];

prodConfig.plugins = prodPlugins;
prodConfig.entry = './src/index';

module.exports = prodConfig;
