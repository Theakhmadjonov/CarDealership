import { Router } from "express";
import UserController from "../controllers/user.controller.js";

const userRouter = Router();
const controller = new UserController();

userRouter.post("/user", controller.createUserController.bind(controller));

export default userRouter;
