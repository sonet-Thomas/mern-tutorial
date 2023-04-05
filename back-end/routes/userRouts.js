const express=require('express')
const router=express.Router()
const {registerUser,getData,asyncMethod,authUser}=require("../controllers/userControllers")
// router.route('/'),registerUser;
router.post('/',(req,res)=>{registerUser(req,res)});
router.post('/login',async (req,res)=>{authUser(req,res)})
router.post('/sonet',(req,res)=>{
    asyncMethod(req,res)
    // console.log(req.params.name);
});
router.get('/',(req,res)=>{
    // res.send("hello");
    res.json(['sonet','software engineer']);
})
router.use('/lion',getData,(res,req)=>{
    res.sen("sonet Thomas")
})

module.exports=router;