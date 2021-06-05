let User = require("../models/user.js").User;
let express = require("express");
let router = express.Router();
let bcrypt = require('bcrypt');

let jwt = require('jsonwebtoken');
let secret = 'gew67dfgew';

function generateToken(user) {
    let payload = {
        email: user.email,
        password: user.password
    }
    return jwt.sign(payload, secret);
}




router.post('/login', async (req, resp) => {
    let email = req.body.email;
    let password = req.body.password;
    let user = await User.find().where({email: email});
    if(user.length > 0) {
        let comparisonResult = await bcrypt.compare(password, user[0].password);
        if(comparisonResult) {
            let token = generateToken(user[0]);
            resp.cookie('auth_token', token);
            resp.send({
                redirectURL: '/admin'
            }); 
        } else {
            resp.status(400);
            resp.send('Rejected');
        }
    } else {
        resp.send('Rejected');
    }
});


router.post("/register",async (req,resp)=>{

    let email = req.body.email;
    let password = req.body.password;

    let user = await User.find().where({email: email});
    if(user.length === 0) {
        let encryptedPass = await bcrypt.hash(password, 12);
        let newUser = new User({
            email: email,
            password: encryptedPass
        })
        await newUser.save();
        resp.send('Done');
    } else {
        resp.send('Rejected');
    }
    


});











module.exports=router;