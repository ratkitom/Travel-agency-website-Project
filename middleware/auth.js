let jwt = require('jsonwebtoken');
let secret = 'gew67dfgew';



function checkToken(token) {
    return jwt.verify(token, secret);
}



function checkAuth(req, resp, next) {
    let token = req.cookies['auth_token'];
    if(token && checkToken(token)) {
        next();
    } else{
        resp.status(400);
        resp.send('Not authorized!');
    }
}

module.exports = checkAuth;