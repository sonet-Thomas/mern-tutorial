
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
var Schema = mongoose.Schema;
const userSchema =new Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        },
    password:{
        type:String,
        required:true,
    },
    isAdmin:{
        type:Boolean,
        required:true,
        default:false,
    },
    pic:{
        type:String,
        required:true,
        default:"https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    }},
    {
        timeStamps:true,
    },
    
    );
    userSchema.pre('save',async function (next){
        if(!this.isModified('password')){
            next();
        }
        const salt =await bcrypt.genSalt(10);
        this.password=await bcrypt.hash(this.password,salt);
    })
    // userSchema.method.matchPassword= function (enteredPassword){
    //     return  bcrypt.compare(enteredPassword,this.password)
    // }
    userSchema.method('matchPassword', async function(enteredPassword) {
        return  await bcrypt.compare(enteredPassword,this.password)
       });
    const User=new mongoose.model('User',userSchema);

    module.exports=User;