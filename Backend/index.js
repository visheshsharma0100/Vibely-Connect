    import express from 'express';
    import dotenv from 'dotenv';
    import connectDB from './config/config.db.js';
    import authRouter from './routes/auth.routes.js';
    dotenv.config();

    const port = process.env.PORT || 3000
    const app = express();


    app.use("/api/auth", authRouter)
    app.listen(port, () => {
        connectDB();
        console.log("Server Started");
    })
