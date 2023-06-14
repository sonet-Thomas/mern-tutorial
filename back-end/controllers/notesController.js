const { error } = require("console");
const Note=require("../models/nodeModel");
const asyncHandler=require("express-async-handler");

const getNotes= async (req,res)=>{
    const notes=await Note.find({user:req.user._id})
    res.json(notes)
}

const createNotes=async(req,res)=>{
const {title,content,category}=req.body;
if(!title || !content || !category){
    res.status(400);
    throw new error("Please fill all the fields");
}
else{
    const note=new Note({user:req.user._id,title,content,category});
    const createdNote=await note.save();
    res.status(201).json(createdNote);
}
}

const getNoteByID=async(req,res)=>{
    console.log(req)

    const note=await Note.findById(req.params.id);
    if(note){
        res.status(201).json(note);
    }
    else{
        res.status(404);
    }
    res.json(note);
}

const UpdateNoteByID=async (req,res)=>{
    console.log(req.params.id,req.body)
    const { title,content,category }=req.body;
    const note=await Note.findById(req.params.id);
    console.log(note);
    if(note.user.toString() !=req.user._id.toString()){
        res.status(401);
        throw new Error("You cant perform this action"); 
    }
    if(note){
        note.title=title;
        note.content=content;
        note.category=category;
        const updatedNote=await note.save();
        res.json(updatedNote);
    }
    else{
        throw new Error("Note not found");
    }
}

const deleteNote = async (req, res) => {
    try {
        const note = await Note.findById(req.params.id);
        if (note.user.toString() != req.user._id.toString()) {
            res.status(401);
            res.send("No permission")
        }

        if (note) {

            const st = await Note.deleteOne({ _id: req.params.id });
            // console.log(st);
            res.json("Note removed");
        }
        else {
            res.status(404);
            res.json("Note not found");
            // throw new Error("Note not found");
        }
    }
    catch (e) {
        res.status(404);
        res.json("Note not found");
    }

}

module.exports={getNotes,createNotes,getNoteByID,UpdateNoteByID,deleteNote}