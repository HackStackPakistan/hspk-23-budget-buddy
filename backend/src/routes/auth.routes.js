import { Router } from "express";
import authController from "../controllers/auth.controllers.js";

const authRouter = Router();


authRouter.get("/:userID", authController.getDataByUserId);
authRouter.post("/register", authController.register);



export default authRouter;
