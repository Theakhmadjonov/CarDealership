import { Router } from "express";
import UserController from "../controllers/user.controller.js";
import AuthMiddleware from "../middleware/auth.middleware.js";
import RoleMiddleware from "../middleware/role.middleware.js";

const userRouter = Router();
const controller = new UserController();

userRouter.post(
  "/user",
  AuthMiddleware,
  RoleMiddleware("admin"),
  controller.createUserController.bind(controller)
);

userRouter.get(
  "/user",
  AuthMiddleware,
  RoleMiddleware("admin"),
  controller.getAllUsersController.bind(controller)
);

userRouter.get(
  "/user:id",
  AuthMiddleware,
  RoleMiddleware("admin"),
  controller.getOneUserController.bind(controller)
);

userRouter.put(
  "/user:id",
  AuthMiddleware,
  RoleMiddleware("admin"),
  controller.updateUserController.bind(controller)
);

userRouter.delete(
  "/user:id",
  AuthMiddleware,
  RoleMiddleware("admin"),
  controller.deleteUserController.bind(controller)
);

export default userRouter;
