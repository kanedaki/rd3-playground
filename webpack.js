'use strict';

var path = require('path');
var webpack = require('webpack');
var js_dist = path.join(__dirname, './dist');

module.exports = {
  name: 'chartComponent',
  entry: {
    line: './line.jsx',
  },
  output: {
    path: js_dist,
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: [/\.jsx$/],
        loader: "babel"
      }
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
