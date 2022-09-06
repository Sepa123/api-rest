import mongoose from "mongoose";



try {
    await mongoose.connect(process.env.URI_MONGO);
    console.log("Base de datos conectada correctamente");
} catch (error) {
    console.log("Error de conexion a MongoDB:",error);
}