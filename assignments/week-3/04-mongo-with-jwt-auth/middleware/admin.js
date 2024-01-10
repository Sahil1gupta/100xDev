const jwt=require("../node_modules/jsonwebtoken")
const secretKey=require('../index'); //here we have stroed secret key globlly
const { JWT_SECRET }=require("../config")
// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected

    const token=req.headers.authorization;
    const words=token.split(" ") //word=> ["bearer", "nnvninos9u939yeu9u3e(actual token)"]
    const jwtToken=words[1];
    const decodedValue=jwt.verify(jwtToken,JWT_SECRET);

    if(decodedValue.username){
        next();
    }
    else{
        res.status(403).json({
            msg:"you are not authenticated"
        })
    }
}

module.exports = adminMiddleware;