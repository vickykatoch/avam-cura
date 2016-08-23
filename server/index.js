import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.dev.config';

let app = express();
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname , '../www')));
const compiler = webpack(webpackConfig);

app.use(webpackMiddleware(compiler, {
  hot: true,
  publicPath: webpackConfig.output.publicPath,
  noInfo: true
}));
app.use(webpackHotMiddleware(compiler));

app.get('/*', (req, res) => {    
  res.sendFile(path.join(__dirname, '../www/index.html'));
});
app.listen(8080, () => console.log('Running on localhost:8080'));