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

        const newUser = new Users({
            userName, email, password:hashedPass,
        });
        
        await newUser.save();

        return res.status(200).josn({
            message:"New user created successfully",
        })
        
    } catch (error) {
        
    }

}
