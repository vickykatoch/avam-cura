import webpack from 'webpack';
import path from 'path';

const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('production'),
  __DEV__: false
};


export default {
  resolve: {
    extensions: ['', '.js']
  },
  debug: true,
  noInfo : true,
  devtools : 'source-map',
  context : path.resolve('src'),
  entry : ['./index'],
  target: 'web',
  output : {
    path: path.resolve('www/assets/'),
		publicPath: 'www/assets/',
		filename: "bundle.js"
  },
  plugins :[
    new webpack.DefinePlugin(GLOBALS),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin()
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