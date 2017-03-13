var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './reactApp/home.js',
  output: {
    path: path.resolve(__dirname,'build'),
    filename: 'home.bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  stats: {
    color : true
  },
  devtool: 'source-map'
}
