import express from 'express';
import { Login, signUp } from '../controllers/auth.controllers.js';
const authRouter = express.Router();
authRouter.post("/signup", signUp);
authRouter.post("/login", Login);

export default authRouter