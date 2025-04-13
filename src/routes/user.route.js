import { Router } from "express";
import UserController from "../controllers/user.controller.js";
import AuthMiddleware from "../middleware/auth.middleware.js";
import RoleMiddleware from "../middleware/role.middleware.js";

const userRouter = Router();
const controller = new UserController();

userRouter.post("/user", controller.createUserController.bind(controller));

userRouter.get("user", controller.getAllUsersController.bind(controller));

export default userRouter;
