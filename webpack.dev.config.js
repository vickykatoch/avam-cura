import path from 'path';
import webpack from 'webpack';

const GLOBALS = {
      'process.env.NODE_ENV': JSON.stringify('development'),
      __DEV__: true
    };

export default {
  resolve: {
    extensions: ['', '.js']
  },
  debug: true,
  devtools : 'eval-source-map',
  context : path.resolve('src'),
  entry : [ 
    './webpack-public-path',
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
    new webpack.HotModuleReplacementPlugin()
  ],
  module : {
    loaders : [
      {
        test : /\.js$/,
        exclude: /node_modules/,
				loaders: ['babel']
      }
    ]
  }
};