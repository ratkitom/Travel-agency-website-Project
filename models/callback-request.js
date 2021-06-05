let mongoose = require("mongoose");

let Schema = mongoose.Schema;



let callbackRequestSchema = new Schema({

    id:String,
    phone:String,
    date: Date

});

let CallBackRequest = mongoose.model("CallbackRequest",callbackRequestSchema,"callback-requests");

module.exports={CallBackRequest};
