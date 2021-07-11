const express = require('express');
const cors = require('cors');
const multer=require('multer');
const upload = multer({ dest: 'uploads/' })
require('dotenv').config()

const app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
});

app.post('/api/fileanalyse',upload.single('upfile'),(req,res,next) =>  {
  console.log(req.file.size);
  const {filename,mimetype,size}=req.file;
  res.send({name:filename,type:mimetype,size});
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
