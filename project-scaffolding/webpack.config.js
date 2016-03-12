
/**
 * WEBPACK CONFIG
 *
 * Inspired from: https://github.com/mvader/react-es6-webpack-karma-boilerplate/blob/master/webpack.config.js
 *
 * Notes on config properties:
 *
 * 'entry'
 * Entry point for the bundle.
 *
 * 'output'
 * If you pass an array - the modules are loaded on startup. The last one is exported.
 *
 * 'resolve'
 * Array of file extensions used to resolve modules.
 *
 * 'webpack-dev-server'
 * Is a little node.js Express server, which uses the webpack-dev-middleware to serve a webpack bundle.
 * It also has a little runtime which is connected to the server via Socket.IO.
 *
 * 'webpack/hot/dev-server'
 * By adding a script to your index.html file and a special entry point in your configuration
 * you will be able to get live reloads when doing changes to your files.
 *
 * devtool: 'eval-source-map'
 * http://www.cnblogs.com/Answer1215/p/4312265.html
 * The source map file will only be downloaded if you have source maps enabled and your dev tools open.
 *
 * HotModuleReplacementPlugin()
 * Hot Module Replacement (HMR) exchanges, adds or removes modules while an application is running without page reload.
 *
 * NoErrorsPlugin()
 * Hot loader is better when used with NoErrorsPlugin and hot/only-dev-server since it eliminates page reloads
 * altogether and recovers after syntax errors.
 *
 * 'react-hot'
 * React Hot Loader is a plugin for Webpack that allows instantaneous live refresh without losing state
 * while editing React components.
 *
 * 'babel'
 * Babel enables the use of ES6 today by transpiling your ES6 JavaScript into equivalent ES5 source
 * that is actually delivered to the end user browser.
 */

const Webpack = require('webpack');
const Path = require('path');
const NpmInstallPlugin = require('npm-install-webpack-plugin');


module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    './src/index'
  ],
  output: {
    filename: "bundle.js",
    path: Path.join(__dirname, 'dist'),
    publicPath: '/dist/'
  },
  resolve: {
    extensions: ['', '.js']
  },
  devtool: 'source-map',
  plugins: [new NpmInstallPlugin()],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [
            'babel?presets[]=es2015&presets[]=stage-0',
        ],


        include: Path.join(__dirname, 'src')
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]",
      },
        { test: /\.css$/, loader: 'style-loader!css-loader' },
        { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
        { test: /\.(woff|woff2)$/, loader:"url?prefix=font/&limit=5000" },
        { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
        { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" }
    ]
  }
};
