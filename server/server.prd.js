import path from 'path';
import express from 'express';


let app = express();
let staticPath = path.join(__dirname,'../www/assets');

app.use('/wwww/assets', express.static(staticPath));

app.get('/', (req, res) => {    
  res.sendFile(path.join(__dirname, '../www/index.html'));
});
app.listen(8080, () => console.log('Running on localhost:8080'));