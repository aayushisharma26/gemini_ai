import express from "express";
import cors from"cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const app = express();
app.use(express.json())

app.use(cors())

app.use((req , res)=>{
    console.log("done")
})

const PORT = process.env.PORT || 4000;
const URL = process.env.MONGODB_URL; 

mongoose.connect(URL)
.then(()=>{
    console.log("Database Done")
})
.catch((err)=>{
    console.log("error",err)
})



app.listen(PORT,()=>{
    console.log('Port is runing....')
})


//MONGODB_URL=mongodb+srv://aayushisharma1:$Navgurukul123@cluster0.jfztl.mongodb.net/Gemini
// PORT = 4000
