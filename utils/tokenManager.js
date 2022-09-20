import jwt from "jsonwebtoken";

export const generateToken = (uid) =>{

    const expiresIn = 60*15;

    try {
        const token = jwt.sign({uid}, process.env.JWT_SECRET, { expiresIn });
        console.log(expiresIn)
        return {token, expiresIn};
        
    } catch (error) {
        console.log(error);
    }
};

export const tokenVerificadorErrors = {
    "invalid signature": "La firma de JWT no es valida",
    "jwt expired":  "JWT expirado",
    "invalid token": "token no válido",
    "No beared": "Utilice el formato Beared",
    "Unexpected token j in JSON at position 0": "Inesperado token en JSON de posición 0",
    "jwt malformed": "jwt mal formado",
}