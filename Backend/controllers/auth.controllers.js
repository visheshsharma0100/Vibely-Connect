import GetToken from "../config/token.js";
import Users from "../models/user.db.js";
import bcrypt from 'bcryptjs';

 export const signUp= async ()=>{
    try {
        const {userName, email , password}= req.body;
        const userExist = await Users.findOne({userName});
        if(userExist){
            return resizeBy.status(400).json({
                message:"User already exist"
            });
        }

        const checkEmail = await Users.findOne({
            email
        });
        if(checkEmail){
            return resizeBy.status(400).json({
                message:"Email already exist"
            });
        }

        if(password < 5){
            return res.status(400).json({
                message:"Password must be at least 6 characters"
            });
        }

        const hashedPass= bcrypt.hash(password,10);

        const newUser = await Users.create({
            userName, email, password:hashedPass,
        });
        
        const token = await GetToken(newUser._id);
        
        res.cookie("token",token,{
            httpOnly:true,
            maxAge:7*24*60*60*1000,
            sameSite:"None",
            secure:false
        });

        return res.status(201).josn({
            newUser
        });

    } catch (error) {
        return res.status(500).json({
            message:error.message
        })
    }
}
