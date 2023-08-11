import mongoose from "mongoose";

const dbConnect = () => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  mongoose.set("strictQuery", false);
  mongoose.connect(process.env.MONGO_URL)
  .then(()=>console.log("Conectado a la BD exitosamente wiiii🚀🚀"))
  .catch((err)=>console.log("Error al conectarse a la base de datos🥴"+err))
};

export default dbConnect;
