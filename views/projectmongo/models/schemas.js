const mongo = require("mongoose");

let siteSchema = mongo.Schema({
    website:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});

let cardSchema = mongo.Schema({
    bank:{
        type:String,
        required:true
    },
    cardnumber:{
        type:String,
        required:true
    },
    year:{
        type:String,
        required:true
    },
    cvv:{
        type:Number,
        required:true
    }
});


let webmodel = mongo.model("websites" , siteSchema)
let cardmodel = mongo.model("cards" , cardSchema)

export_data = {
    webpage_model:webmodel,
    card_model:cardmodel
}

module.exports = export_data



