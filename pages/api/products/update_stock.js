import nc from "next-connect";
import dbConnect from "@/backend/config/dbConnect";
import { 
    updateProductWithStockUpdate, 
} from "@/backend/controllers/productControllers";
import onError from "@/backend/middlewares/errors";

const handler = nc({onError});

dbConnect();
handler.put(updateProductWithStockUpdate);

export default handler;
