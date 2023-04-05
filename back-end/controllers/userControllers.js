var User=require("../models/userModel");
const asyncHandler=require("express-async-handler");

const registerUser= asyncHandler( async(req,res)=>{
const{name,email,password,pic}=req.body;
const userExist=await User.findOne({email});
if(userExist){
    res.status(400);
    res.send("user already exist");
    // throw new Error("User Already exist");
}
else{
    const user=await User.create(
        {
            name,email,password,pic
        }
    )
    if(user){
        res.status(200);
        res.send({
            _id:user._id,
            name:user.name,
            email:user.email,
            isAdmin:user.isAdmin,
            pic:user.pic,
        });
    }
}

// else{
//     res.status(400)
//     throw new Error('Error occured');
// }
// getResponse().then((data)=>{res.send(data)});
// res.send(data)
// res.send(`${name},${email},${password},${pic}`);
})




const authUser= asyncHandler( async(req,res)=>{
    const {email,password}=req.body;
    const user= await User.findOne({email});
    const userExist=await User.findOne({email});
    const ab=user.matchPassword(password)
    console.log(ab);
    if(user && (user.matchPassword(password))){
        res.send({
            id:user._id,
            name:user.name,
            email:user.email,
            isAdmin:user.isAdmin,
            pic:user.pic,
        })
    }
    else {
        res.send("Invalid email or password")
    }
    })

const asyncMethod=async(req,res)=>{
data=await getResponse();
res.send(data);
}
 const getResponse=()=>{
    return new Promise(resolve => {
        setTimeout(()=>{resolve("process completed")},5000)
        // resolve("process completed");
    })
 }
const express=require('express');
const { error } = require("console");
const router=express.Router();
const getData=()=>{
    router.get('/',(req,res)=>{
        res.send("childData");
    })
}

module.exports={registerUser,getData,asyncMethod,authUser}