import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import autoprefixer from 'autoprefixer';
// var path = require('path'),
//     webpack = require('webpack');

const GLOBALS = {
      'process.env.NODE_ENV': JSON.stringify('development'),
      __DEV__: true
    };
//module.exports = {
export default {

  resolve: {
    extensions: ['', '.js','.scss', '.css']
  },
  stats: {
        colors: true
  },
  progress : true,
  headers: { "X-Custom-Header": "yes" },
  debug: true,
  devtool: 'source-map',
  context : path.resolve('src'),
  entry : [     
    'webpack-hot-middleware/client?reload=true',
    './index'
  ],
  target: 'web',
  output : {
    path: path.resolve('www/assets/'),
		publicPath: '/www/assets/',    
		filename: "bundle.js"
  },
  plugins :[
    new webpack.DefinePlugin(GLOBALS),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin("styles.css")
  ],
  postcss: [autoprefixer],
  module : {
    loaders : [
      {
        test : /\.js$/,
        exclude: /node_modules/,
				loaders: ['babel']
      },
      {
				test: /\.css$/,
				loader: ExtractTextPlugin.extract("style-loader", "css-loader")
			},
			{
				test: /\.scss$/,				
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
        
			}
    ]
  }
};

//loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
//loader: ExtractTextPlugin.extract('style', 'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass')