let Email = require("../models/email.js").Email;
let express = require("express");
let router = express.Router();
let uniqid = require("uniqid");

let middlewareAuth = require("../middleware/auth");

router.get("/",middlewareAuth,async (req,resp)=>{

    resp.send(await Email.find());


});

router.post("/",async (req,resp)=>{

    let reqBody = req.body;

    let newEmail=new Email({

        id:uniqid(),
        email:reqBody.email,
        name:reqBody.name,
        message:reqBody.message,
        date:new Date()

    });

   await newEmail.save();

    resp.send("Sent");
    
});

router.delete("/:id",middlewareAuth,async (req,resp)=>{

    await Email.deleteOne({id:req.params.id});

    resp.send("Deleted");
    
});

module.exports=router;