import jwt from "jsonwebtoken";
import { generateRefreshToken } from "../middlewares/requireToken.js";
import { User } from "../models/User.js";
import { generateToken, tokenVerificadorErrors } from "../utils/tokenManager.js";

export const login = async(req,res) => {
    const {email,password} = req.body;
    try {

        let user = await User.findOne({email:email});
        if (!user) return res.status(403).json({error:"no existe este usuario"});

        const respuestaPassword = await user.comparePassword(password);
        if (!respuestaPassword) return res.status(403).json({error:"Contraseña incorrecta"});
        
        //TODO: Generar jwt
        const {token, expiresIn } = generateToken(user.id);
        generateRefreshToken(user.id, res);

        return res.json({token, expiresIn});
    } catch (error) {
        console.log(error);
    }
}

export const register = async(req,res) => {

    const {email,password} = req.body;
    console.log(email)
    try {
        // alternativa a usuarios repetidos por email
        // let user = await User.findOne({email:email});
        // if (user) throw {code: 11000};
        
        let user = new User({
            email:email, password:password
        });

        await user.save();

        // json web token

        const {token, expiresIn } = generateToken(user.id);
        generateRefreshToken(user.id, res);

        return res.status(201).json({token, expiresIn});

    } catch (error) {
        console.log("Error:",error);
        //errores encontrado por mongoose
        if(error.code === 11000){
            return res.status(400).json({error:"El email ya ha sido registrado",code: error.code});
        }
        return res.status(500).json({error:"Error inesperado del servidor"})
    }
    // console.log(req.body);
    // res.json({ on: true});
}

export const infoUser = async(req,res) => {
    try {
        console.log(req.uid)
        const user = await User.findById(req.uid).lean();
        return res.json({email: user.email});
    } catch (error) {
        return res.status(500).json({error: "Error del servidor"})
    }
    
}

export const refreshToken = (req,res) => {
    try {
        
        const uid = req.uid;
        const {token, expiresIn } = generateToken(uid);
        
        return res.json({token, expiresIn});

    } catch (error) {
        console.log(error.message);
        return res.status(500).json({error: "error de server" });
    }
};

export const logout = (req,res) => {
    res.clearCookie("refreshToken");
    res.json({ok:true})
};