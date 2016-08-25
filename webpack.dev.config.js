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
  stats: {
        colors: true
  },
  progress : true,
  headers: { "X-Custom-Header": "yes" },
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
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
            children: true,
            // (use all children of the chunk)
            async: true,
            // (create an async commons chunk)
        })
  ],
  module : {
    loaders : [
      {
        test : /\.js$/,
        exclude: /node_modules/,
				loaders: ['babel']
      },
      {
				test: /\.css$/,
				exclude: /node_modules/,
				loader: "style-loader!css-loader"
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				loader: "style-loader!css-loader!sass-loader"
			}
    ]
  }
};