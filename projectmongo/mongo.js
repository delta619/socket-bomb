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

let obj = {}

router.get("/mongo" , async(req ,res)=>{


        async.parallel(
            [
                function (cb){ collection.webpage_model.find({}).lean().exec(cb)},
                function (cb){ collection.card_model.find({}).lean().exec(cb)}
            ] 
        , function(err, result){
             
        res.render("mongo" , 
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
router.get("/mongo/insert" , (req ,res)=>{


     obj = new collection.card_model({
        bank: "HDFC",
        cardnumber:"4324234322342",
        year:"2019",
        cvv:999
    })
    
    save(obj , res);

     
   
})


function save(object , res){

    object.save()

    .then(msg=>{
        res.json("saved")
    })
    .catch(err=>{
        console.log(err);
        res.json(err);
    })

}

module.exports = router