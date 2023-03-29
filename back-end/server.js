const express=require('express');
const app=express();
require('dotenv').config()
const data=require('./data/note')

console.log(process.env.PORT)
const PORT= process.env.PORT;
app.get("/",(req,res)=>{res.send("Api is running")});

app.get("/api/notes",(req,res)=>{res.json(data)})

app.get("/api/notes/:id",(req,res)=>{
    const result=data.find((n)=>n._id===req.params.id);
    res.send(result);
})

app.listen(PORT, console.log(`Application Succesfully started on port ${PORT}`));