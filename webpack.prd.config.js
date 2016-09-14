import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import autoprefixer from 'autoprefixer';

const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('production'),
  __DEV__: false,
  'BABEL_ENV': JSON.stringify('production')
};


export default {
  resolve: {
    extensions: ['', '.js', '.scss', '.css']
  },
  debug: false,
  noInfo: true,
  devtools: 'source-map',
  context: path.resolve('src'),
  entry: ['./index','./styles/images/index'],
  target: 'web',
  output: {
    path: path.resolve('www/assets/'),
    publicPath: 'www/assets/',
    filename: "avam-cura.js"
  },
  plugins: [
    new webpack.DefinePlugin(GLOBALS),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      children: true,
      // (use all children of the chunk)
      async: true,
      // (create an async commons chunk)
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin("styles.css")
  ],
  sassLoader: {
    data: '@import "styles/_config.scss";',
    includePaths: [path.resolve(__dirname, './src')]
  },
  postcss: [autoprefixer],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel'],
        query :{
          presets: ['es2015', 'react', 'stage-0'],
          plugins: [
                      "transform-react-constant-elements",
                      "transform-react-remove-prop-types"
                    ]
        }
      },
      {
        test: /(\.scss|\.css)$/,
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass')
      },
      { test: /\.eot(\?v=\d+.\d+.\d+)?$/, loader: 'file' },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' },
      { test: /\.(jpe?g|png|gif)$/i, loader: 'file?name=[name].[ext]' },
      { test: /\.ico$/, loader: 'file?name=[name].[ext]' }
    ]
  }
};