const express = require('express');
const bodyParser = require("body-parser")
const mongo = require('mongoose');
const path = require("path");

const exphbs = require("express-handlebars");

const projectmongo = require('./views/projectmongo/mongo');


var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.engine("hbs" , exphbs(
  {
    extname:"hbs" , 
    defaultLayout:'layout' , 
    layoutsDir:path.join(__dirname,"/views/layouts"),
  }))

app.set("view engine" , "hbs");
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});





app.get('/' , (req , res)=>{
  res.render("index")
})


app.use(projectmongo);


  app.listen(process.env.PORT || 3000 , ()=>{

    console.log("Server started");
  
  })