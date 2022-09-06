import { User } from "../models/User.js";

export const login = async(req,res) => {
    const {email,password} = req.body;
    try {

        let user = await User.findOne({email:email});
        if (!user) return res.status(403).json({error:"no existe este usuario"});

        const respuestaPassword = await user.comparePassword(password);
        if (!respuestaPassword) return res.status(403).json({error:"Contraseña incorrecta"});
        
        //TODO: Generar jwt
        return res.json({ok: "login"});
    } catch (error) {
        
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
            email:email,password:password
        });

        await user.save();

        // json web token
        return res.status(201).json({ok:true});

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