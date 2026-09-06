import jwt from 'jsonwebtoken';
const GetToken= async (userId)=>{
    try {
        const token = jwt.sign({userId},process.env.JWT_SECRET, {expiresIn:"7d"},)
        return token;
    } catch (error) {
        console.log("Token not found");
    }
}
export default GetToken;