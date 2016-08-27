import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import autoprefixer from 'autoprefixer';

const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('production'),
  __DEV__: false
};


export default {
  resolve: {
    extensions: ['', '.js','.scss', '.css']
  },
  debug: false,
  noInfo : false,
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
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
            children: true,
            // (use all children of the chunk)
            async: true,
            // (create an async commons chunk)
        }),
    new ExtractTextPlugin("styles.css")
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
				loader: ExtractTextPlugin.extract("style-loader", "css-loader")
			},
			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
			}
    ]
  }
};