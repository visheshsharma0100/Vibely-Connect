import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/config.db.js';
dotenv.config();
const port = process.env.PORT || 3000
const app = express();
app.get("/",(req,res)=>{
    res.send("Hello");
});

app.listen(port,()=>{
    connectDB();
    console.log("Server Started");
})
