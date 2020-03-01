const router = require("express").Router();
const path = require("path")
let collection = require('./models/schemas');
const mongo = require('mongoose');
var async = require("async");

let database = "note";
let username = "user";
let password = "pass";

mongo.connect(`mongodb+srv://${username}:${password}@mongo-cluster-wtmmm.mongodb.net/${database}?retryWrites=true&w=majority`, {useNewUrlParser: true , useUnifiedTopology:true});
let db = mongo.connection;

db.once("open" , ()=>{
  console.log("Mongo db connected");
})

db.on('error' , (err)=>{
  console.log(err);
})

router.get("/mongo" , async(req ,res)=>{
        async.parallel(
            [
                function (cb){ collection.webpage_model.find({}).lean().exec(cb)},
                function (cb){ collection.card_model.find({}).lean().exec(cb)}
            ] 
        , function(err, result){      
        res.render("projectmongo/views/main" , 
        {
            web:result[0] , 
            card:result[1] , 
            helpers: {
                indexInc:(ind)=>{
                    return ind+1
                }
            }
        })            
        });
})
router.get("/mongo/add" , (req ,res)=>{

     res.render("projectmongo/views/add" , req.body);
   
})

router.post("/mongo/add/card" , (req ,res)=>{

    let value = req.body;


    let doc = new collection.card_model({
        bank : value.bank,
        cardnumber : value.cardnumber,
        year : value.year,
        cvv : parseInt(value.cvv)
    })

    
    doc.save((err  , data )=>{
        if(err){
            console.log("Error insering Data");
            res.status(500);
        }else{
            console.log("Data inserted successfully");
            res.status(200).redirect("../");

        }
    })
})




module.exports = router