import nc from "next-connect";
import dbConnect from "@/backend/config/dbConnect";
import onError from "@/backend/middlewares/errors";
import { isAuthenticatedUser } from "@/backend/middlewares/auth";
import { createOrder } from "@/backend/controllers/orderControllers";

const handler = nc({ onError });

dbConnect();

// Agrega el middleware CORS aquí
handler.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "https://soranyshop.vercel.app");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.setHeader("Access-Control-Allow-Credentials", true);
    if (req.method === "OPTIONS") {
      res.status(200).end();
    } else {
      next();
    }
  });

// handler.use(isAuthenticatedUser).post(createOrder);
handler.post(createOrder);

export default handler;
