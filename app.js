let express = require("express");
let mongoose = require("mongoose");
let multer = require("multer");
let app = express();
let bp = require('body-parser');
let cookieParser= require("cookie-parser");
let postRouter=require("./routes/posts");
let Post = require("./models/post.js").Post;
let callbackRequestRouter=require("./routes/callback-requests.js");
let emailRouter=require("./routes/emails.js");
let usersRouter=require("./routes/users.js");




let jwt = require('jsonwebtoken');
let secret = 'gew67dfgew';



function checkToken(token) {
    return jwt.verify(token, secret);
}




mongoose.connect("mongodb://localhost/travels",{useNewUrlParser: true, useUnifiedTopology: true});
app.set("view engine","ejs");

app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));
let storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })


app.use(multer({storage:storage}).single("imageFile"));

app.use(express.static("public"));


app.use(cookieParser());
app.use("/posts",postRouter);
app.use("/callback-requests",callbackRequestRouter);
app.use("/emails",emailRouter);
app.use("/users",usersRouter);


app.get("/sight",async (req,resp)=>{

  let id = req.query.id;

  let post = await Post.findOne({id:id});




  resp.render("sight",{

    title:post.title,
    imgUrl:post.imageUrl,
    date:post.date,
    text:post.text
  });



});




app.get("/admin",(req,resp)=>{

  let token = req.cookies["auth_token"];



  if(token && checkToken(token))
  {
    resp.render("admin");
  }
  else{

    resp.redirect("/login");
  }
  

});


app.get("/login",(req,resp)=>{


  resp.render("login");


})

app.listen(3000,()=>{


    console.log("Listening on port 3000");
})

