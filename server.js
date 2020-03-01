const express = require('express');
const mongo = require('mongoose');
const path = require("path");

const exphbs = require("express-handlebars");

const projectmongo = require('./projectmongo/mongo');


var app = express();



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