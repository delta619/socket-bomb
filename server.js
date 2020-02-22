var express = require('express');
var app = express();
app_server = app.listen(process.env.PORT || 3000);

var io = require('socket.io')(app_server);

var clients = {};

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// app.use(express.static('public'));


app.get('/', function(req, res){
    res.json("Connected to Server");
  });

  app.get('/check', function(req, res){

    
  });


  io.on('connection' , (socket)=>{
      socket.emit('status' , 'OK');
      socket.on("isReady" , (name)=>{
        clients["name"] = 0;
      })
  });
