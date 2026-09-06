import GetToken from "../config/token.js";
import Users from "../models/user.db.js";
import bcrypt from 'bcryptjs';

export const signUp = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const userExist = await Users.findOne({ username });
        if (userExist) {
            return res.status(400).json({
                message: "User already exist"
            });
        }

        const checkEmail = await Users.findOne({
            email
        });
        if (checkEmail) {
            return resizeBy.status(400).json({
                message: "Email already exist"
            });
        }

        if (password < 5) {
            return res.status(400).json({
                message: "Password must be at least 6 characters"
            });
        }

        const hashedPass = await bcrypt.hash(password, 10);

        const newUser = await Users.create({
            username, email, password: hashedPass,
        });

        const token = await GetToken(newUser._id);

        res.cookie("token", token, {
            httpOnly: true,
            maxAge: 7 * 24 * 60 * 60 * 1000,
            sameSite: "None",
            secure: false
        });

        return res.status(201).json({
            message:"SignUp successfully"
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}
export const Login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await Users.findOne({ email });
        if (!user) {
            res.status(400).json({
                message: "User does not exist"
            });
        }

        const matchedPassword = await bcrypt.compare(password, user.password);
        if (!matchedPassword) {
            return res.status(400).json({
                message: "Incorrect Password"
            });
        }

        const token = await GetToken(user._id);

        res.cookie("token", token, {
            httpOnly: true,
            maxAge: 7 * 24 * 60 * 60 * 1000,
            sameSite: "None",
            secure: false
        });

        return res.status(201).json({
            message:"Login Successfully"
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
}

