const express=require('express');
const app=express();
require('dotenv').config()
const data=require('./data/note')
const connectDB=require("./config/db")
const userRoutes=require('./routes/userRouts');
// const { noteFound} = require('./middlewares/errorMiddileware');
const {ErrorHandler,notFound} =require('./middlewares/errorMiddileware');

const router = express.Router()
app.use(express.json());
// const cors = require('cors');

// const corsOptions = {
//     origin: '*',
// }
// app.use(cors());

connectDB();
// app.use(express.json())
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "http://localhost:3000","http://localhost:5000");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "OPTIONS, GET, POST, PUT, PATCH, DELETE"
      );
      res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
      next();
});
// app.use(ErrorHandler);
// app.use(notFound);

// app.use(function (req, res, next) {
//   console.log("enter the api");
//   res.json({"error":"an error occured"})
//     next();
// });

console.log(process.env.PORT)
const PORT= process.env.PORT;
// app.get("/",(req,res)=>{res.send("Api is running")});

app.get("/api/notes",(req,res)=>{res.json(data)})

app.get("/api/notes/:id",(req,res)=>{
    const result=data.find((n)=>n._id===req.params.id);
    res.send(result);
})
// app.get("/", (req, res) => {
//     res.send('GET request to the homepage')
//   })
//   app.post('/', (req, res) => {
//     res.send('POST request to the homepage')
//   })
  app.get('/about', (req, res) => {
    res.send('about')
  })
  app.get('/users/:userId/books/:bookId', (req, res) => {
    res.send(req.params)
    console.log("userRoutes",userRoutes)
  })
  const cb0 = function (req, res, next) {
    console.log('CB0')
    next()
  }
  
  const cb1 = function (req, res, next) {
    console.log('CB1')
    next()
  }
  
  const cb2 = function (req, res) {
    res.send('Hello from C!')
  }
  app.post('/signup', function (req, res) {
    const data = req.body;
 
    console.log("Name: ", data);
 
    if(data){
      res.send(data)
    }
    else{
      res.send({})
    }
    
});
  app.get('/example/c', [cb0, cb1, cb2])

  router.get('/hello', (req, res) => {
    res.send('hello world')
  })
  router.get('/', (req, res) => {
    res.send("Birds home page")
    console.log("home page route")
  })
//   app.use(express.json());
app.use('/api/users',userRoutes);
app.listen(PORT, console.log(`Application Successfully started on port ${PORT}`));