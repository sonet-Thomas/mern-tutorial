const express=require('express')
const router=express.Router()
const protect= require("../middlewares/authMiddilewire")
const {getNotes,createNotes,getNoteByID,UpdateNoteByID,deleteNote}=require("../controllers/notesController")


// router.use(function (req, res, next) {
//     res.header('Access-Control-Allow-Origin', "http://localhost:3000","http://localhost:5000");
//     res.setHeader(
//         "Access-Control-Allow-Methods",
//         "OPTIONS, GET, POST, PUT, PATCH, DELETE"
//       );
//       res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
//       next();
// });

// router.use(protect);
router.route("/").get(protect,(req,res)=>{getNotes(req,res)});
router.route('/create').post(protect,(req,res)=>{createNotes(req,res)})
router.route('/:id').get(protect,(res,req)=>{getNoteByID(req,res)})
router.route('/:id').put(protect,(req,res)=>{UpdateNoteByID(req,res)})
router.route('/:id').delete(protect,(req,res)=>{deleteNote(req,res)})

module.exports=router;