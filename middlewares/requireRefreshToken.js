import jwt from "jsonwebtoken";
import { tokenVerificadorErrors } from "../utils/tokenManager.js";

export const requireRefreshToken = (req,res,next) => {
    try {
        let refreshTokenCookie = req.cookies?.refreshToken;
        if(!refreshTokenCookie) throw new Error ("No existe token refresh");
        
        console.log(refreshTokenCookie)
        const {uid} = jwt.verify(refreshTokenCookie, process.env.JWT_REFRESH);

        req.uid = uid;

        next();
    } catch (error) {
        console.log(error.message);
        res.status(401).json({error: tokenVerificadorErrors[error.message]})
    }
}