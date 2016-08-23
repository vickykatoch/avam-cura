var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin=require('extract-text-webpack-plugin');

var GLOBALS = {
  'process.env.NODE_ENV' : JSON.stringify('production')
};

module.exports = {
  devtools: 'source-map',
  context : __dirname,
  entry: [
    './src/index.js'
  ],
  output: {
    path: path.join(__dirname,'./www/scripts'),
    publicPath: '/',
    filename : 'bundle.js'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin(GLOBALS),
    new ExtractTextPlugin('style.css'),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    loaders: [
        {
            test: /\.js$/,
            include: [
                path.join(__dirname, 'src')
            ],
            loaders: [ 'react-hot', 'babel' ]
        },
        { test: /\.css$/, loader: 'style-loader!css-loader' },
        { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
        { test: /\.(woff|woff2)$/, loader:"url?prefix=font/&limit=5000" },
        { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
        { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" }
    ]
  },
  resolve: {
    extentions: [ '', '.js' ]
  }
}