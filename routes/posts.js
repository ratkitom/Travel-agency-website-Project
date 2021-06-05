
let uniqid = require("uniqid");
let Post = require("../models/post.js").Post;
let CallBackRequest = require("../models/callback-request.js").CallBackRequest;
let express = require("express");
let router = express.Router();

let middlewareAuth = require("../middleware/auth");







router.get("/",async (request,response)=>{

    let posts = await Post.find();
    
    response.send(posts);


});

router.get("/:id", async(request,response)=>{

    let id = request.params.id;

    let post = await Post.findOne({id:id});
    
    response.send(post);


});

router.post("/",middlewareAuth,async (request,response)=>{

    let reqBody= request.body;

    let imgPath;

    if(reqBody.imgUrl){

        imgPath=reqBody.imgUrl;
    }   else{

        imgPath=request.file.path.substring(request.file.path.indexOf("/"),request.file.path.length);
    }

    let newPost = new Post({

        id:uniqid(),
        title:reqBody.title,
        date: new Date(),
        description:reqBody.description,
        text:reqBody.text,
        country:reqBody.country,
        imageUrl:imgPath

    });

    await newPost.save();


   
   

    response.send("created");


});

router.delete("/:id",middlewareAuth, async(req,resp)=>{

let id = req.params.id;

await Post.deleteOne({id:id});

resp.send("deleted");


});

router.put("/:id",middlewareAuth, async(req,resp)=>{

    let id = req.params.id;
    
    await Post.updateOne({id:id},req.body);
    
    resp.send("Updated");
    
    
    });
    


module.exports=router;