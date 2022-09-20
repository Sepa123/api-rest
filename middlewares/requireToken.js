import jwt from "jsonwebtoken";
import { tokenVerificadorErrors } from "../utils/tokenManager.js";

export const requireToken = (req,res,next) => {
    try {
        let token = req.headers?.authorization;
        if (!token) throw new Error ("invalid signature");

        token = token.split(" ")[1]
        const {uid} = jwt.verify(token, process.env.JWT_SECRET);
        req.uid = uid;
        
        next();
    } catch (error) {
        console.log(error.message);

        return res.status(401).json({error: tokenVerificadorErrors[error.message] });
    }
}

export const generateRefreshToken = (uid,res) => {
    const expiresIn = 60* 60* 25* 30;
    try {
        const refreshToken = jwt.sign({uid}, process.env.JWT_REFRESH, {expiresIn});
        res.cookie("refreshToken",refreshToken, {
            httpOnly: true,
            secure: !(process.env.MODO === "developer"),
            expires: new Date(Date.now() + expiresIn * 1000)
        });


    } catch (error) {
        console.log(error.message)
    }
}

