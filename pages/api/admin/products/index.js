import nc from "next-connect";
import dbConnect from "@/backend/config/dbConnect";
import onError from "@/backend/middlewares/errors";
import {
  authorizeRoles,
  isAuthenticatedUser,
} from "@/backend/middlewares/auth";
import { newProduct} from "@/backend/controllers/productControllers";

const handler = nc({ onError });

dbConnect();

// handler.use(isAuthenticatedUser, authorizeRoles("admin")).post(newProduct);
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
handler.post(newProduct);

export default handler;