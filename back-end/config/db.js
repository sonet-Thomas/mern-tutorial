const mongoose=require('mongoose')
const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = process.env.MONGO_URI;
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// const connectDB=()=>{
//     client.connect(err => {
//         const collection = client.db("test").collection("devices");
//         // perform actions on the collection object
//         client.close();
//       });
// }
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
// const { async } = require('rxjs')

const connectDB= async()=>{
    try{
        const conn=await mongoose.connect(process.env.MONGO_URI,{ useNewUrlParser: true });
        console.log(`mongo connected:${conn.connection.host}`);
    }
    catch(error){
console.log(error);
process.exit();
    }
};
module.exports= connectDB;