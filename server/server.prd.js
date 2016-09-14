import path from 'path';
import express from 'express';

process.env.NODE_ENV = 'production';
process.env.BABEL_ENV = 'production';

let app = express();
let staticPath = path.join(__dirname,'../www/assets');

app.use('/www/assets', express.static(staticPath));

app.get('/', (req, res) => {    
  res.sendFile(path.join(__dirname, '../www/index.html'));
});
app.listen(8080, () => console.log('Running on localhost:8080'));