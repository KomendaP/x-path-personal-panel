var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname, 'app'),
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'app'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      ON_TEST: process.env.NODE_ENV ==='test'
    })
  ],
  devtool: 'source-map',
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.html$/, exclude: /(node_modules|bower_components)/, loader: 'raw' },
      { test: /\.css$/, exclude: /(node_modules|bower_components)/, loader: 'style!css' },
      { test: /\.scss$/, exclude: /(node_modules|bower_components)/, loaders: [ 'style', 'css', 'sass' ] }
    ]
  }
};