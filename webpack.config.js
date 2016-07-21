var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname, 'app'),
  
  entry: {
    index: [
      "webpack-dev-server/client?http://localhost:8080/",
      "webpack/hot/dev-server",
      './index.js'
    ]
  },
  
  output: {
    path: path.resolve(__dirname, 'prod'),
    filename: '[name].js',
    library: "[name]" // global variable
  },
  
  devtool: 'source-map',
  
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel"
      },
      {
        test: /\.html$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'raw'
      },
      {
        test: /\.css$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'style!css'
      },
      {
        test: /\.scss$/,
        exclude: /(node_modules|bower_components)/,
        loaders: [
          'style',
          'css',
          'sass'
        ]
      }
    ],
    noParse: /node_modules\/angular\/angular.js/
  },
  
  plugins: [
    new webpack.NoErrorsPlugin(), // prevents file creation on errors of compilation
    new webpack.HotModuleReplacementPlugin(),
    // env vars (own plugins for test)
    new webpack.DefinePlugin({
      ON_TEST: process.env.NODE_ENV === 'test'
    }),
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify('test')
    })
  ],

  devServer: {
    host: 'localhost',
    port: 8080,
    contentBase: path.resolve(__dirname, 'prod'),
    hot: true // hot replacement
  }
};

/*
if (NODE_ENV === 'production') {
  module.exports.plugins.push(
    new webpack.optimize.Uglify()
  )
}
*/