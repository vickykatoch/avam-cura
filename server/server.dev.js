import path from 'path';
import express from 'express';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from '../webpack.dev.config';

let app = express();

const compiler = webpack(config);
app.use(webpackMiddleware(compiler,{
    hot: true,
    publicPath : config.output.publicPath,
    noInfo :true,
}));
app.use(webpackHotMiddleware(compiler));

app.get('/', (req, res) => {    
  res.sendFile(path.join(__dirname, '../www/index.html'));
});
app.listen(8080, () => console.log('Running on localhost:8080'));