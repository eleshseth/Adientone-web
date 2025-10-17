import mongoose from "mongoose";

const ConnectDb = async ()=>{
await mongoose.connect(process.env.MONGO_URI)
.then(()=>{
 console.log("DB CONNECTED SUCESSFULLY")
})
}

export default ConnectDb;