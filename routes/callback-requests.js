let CallBackRequest = require("../models/callback-request.js").CallBackRequest;
let express = require("express");
let router = express.Router();
let uniqid = require("uniqid");

let middlewareAuth = require("../middleware/auth");


router.get("/",middlewareAuth,async (req,resp)=>{

    resp.send(await CallBackRequest.find());


});

router.post("/",async (req,resp)=>{

    let reqBody = req.body;

    let newRequest=new CallBackRequest({

        id:uniqid(),
        phone:reqBody.phone,
        date:new Date()

    });

   await newRequest.save();

    resp.send("Created");
    
});

router.delete("/:id",middlewareAuth,async (req,resp)=>{

    await CallBackRequest.deleteOne({id:req.params.id});

    resp.send("Deleted");
    
});

module.exports=router;