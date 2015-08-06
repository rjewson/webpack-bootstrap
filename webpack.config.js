var Webpack = require('webpack');
var path = require('path');
var appPath = path.resolve(__dirname, 'src');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var buildPath = path.resolve(__dirname, 'public', 'build');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var config = {
  context: __dirname,
  devtool: 'eval-source-map',
  entry: {
    app:    ["webpack/hot/dev-server","./src/main.js"]
  },
  output: {
    path: buildPath,
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  module: {
    loaders: [
      { test: /\.scss$/,  loader: ExtractTextPlugin.extract('css?sourceMap!sass?sourceMap') }
    ]
  },
  plugins: [
    new Webpack.HotModuleReplacementPlugin(),
    new Webpack.DefinePlugin({
      __DEV__: true
    }),
    new ExtractTextPlugin("styles.css", { allChunks: true }),
    new Webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "windows.jQuery": "jquery"
    })
  ],
  resolve: {
    root:appPath
  }
};

module.exports = config;