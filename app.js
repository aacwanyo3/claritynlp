const express = require('express');
const app = express();
const router = express.Router();

const path = __dirname + '/views/';
const port = 8081;

router.use(function (req,res,next) {
  console.log('/' + req.method);
  next();
});

router.get('/', function(req,res){
  res.sendFile(path + 'index.html');
});

router.get('/trials', function(req,res){
  res.sendFile(path + 'trials.html');
});

router.get('/results', function(req,res){
  res.sendFile(path + 'results.html');
});

app.use(express.static(path));
app.use('/', router);

app.listen(port, function () {
  console.log('Example app listening on port 8081!')
})