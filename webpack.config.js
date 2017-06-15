const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

process.env.NODE_ENV = process.env.NODE_ENV || 'production';

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'lib'),
    publicPath: 'lib/',
    filename: 'react-p.js',
    sourceMapFilename: 'react-p.map',
    library: 'ReactP',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['.js']
  },
  externals: {
    'react': {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    }
  },
  plugins: [
    new ExtractTextPlugin({ filename: 'index.css' }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: path.resolve(__dirname, 'node_modules')
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      }
    ]
  }
}
