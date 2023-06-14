const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");


const protect = async (req, res, next) => {
    let token;

    try {
        if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {

            token = req.headers.authorization.split(" ")[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            if(decoded){
                req.user = await User.findById(decoded.id).select("-password");
                console.log(req.user);
                next();
            }
            else {
                res.send(401)
            }
        }
        if (!token) {
            res.status(401);
            throw new Error("Not authorized,not token found");
        }
    }
    catch (error) {
        res.status(401);
        res.send({error:"invalid token"})
    }
}

module.exports = protect