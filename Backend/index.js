import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/config.db.js';
import authRouter from './routes/auth.routes.js';
import cookieParser from 'cookie-parser';
dotenv.config();

const port = process.env.PORT || 3000
const app = express();
app.use(express.json());
app.use(cookieParser());

app.get("/",(req,res)=>{
    res.send("Hello From Sever");
})
app.use("/api/auth", authRouter);
const startServer = async () => {
    try {
        await connectDB();

        app.listen(port, () => {
            console.log(`Server Started on port ${port}`);
        });
    } catch (error) {
        console.log("Database connection failed:", error);
    }
};

startServer();
