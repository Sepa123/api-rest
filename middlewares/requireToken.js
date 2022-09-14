import jwt from "jsonwebtoken";

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

        const tokenVerificadorErrors = {
            "invalid signature": "La firma de JWT no es valida",
            "jwt expired":  "JWT expirado",
            "invalid token": "token no válido",
            "No beared": "Utilice el formato Beared",
            "Unexpected token j in JSON at position 0": "Inesperado token en JSON de posición 0",
            "jwt malformed": "jwt mal formado",
            "invalid signature": "No existe el token en headers usa Bearer"
        }

        return res.status(401).json({error: tokenVerificadorErrors[error.message] });
    }
}

export const generateRefreshToken = (uid,res) => {
    const expireIn = 60* 60* 25* 30;
    console.log("pasa")
    try {
        console.log("pasa2")
        const refreshToken = jwt.sign(uid, process.env.JWT_REFRESH);
        console.log("pasa")
        res.cookie("refreshToken",refreshToken, {
            httpOnly: true,
            secure: !(process.env.MODO === "developer"),
            expires: new Date(Date.now() + expireIn * 1000)
        });
        console.log("pasa")
    } catch (error) {
        console.log(error.message)
    }
}