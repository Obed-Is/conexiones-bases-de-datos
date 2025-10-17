import mongoose from "mongoose";

export const getMongo = async () => {
    try {
        const mongoDb = await mongoose.connect(process.env.URI_MONGO_DB);
        console.log('Conexion a MongoDb exitosa 😎');
    } catch (error) {
        console.log('Ocurrio un error al intentar conectarse a MongoDb 💀')
        console.log(error);
    }
}