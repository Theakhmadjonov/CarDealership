import { Router } from "express";
import AuthMiddleware from "../middleware/auth.middleware.js";
import RoleMiddleware from "../middleware/role.middleware.js";
import CarController from "../controllers/car.controller.js";

const carRouter = Router();
const controller = new CarController();

carRouter.post(
  "/car",
  AuthMiddleware,
  RoleMiddleware("admin"),
  controller.createCarController.bind(controller)
);

carRouter.get(
  "/car",
  AuthMiddleware,
  RoleMiddleware("admin"),
  controller.getAllCarController.bind(controller)
);

carRouter.get(
  "/car:id",
  AuthMiddleware,
  RoleMiddleware("admin"),
  controller.getOneCarController.bind(controller)
);

carRouter.put(
  "/car:id",
  AuthMiddleware,
  RoleMiddleware("admin"),
  controller.updateCarController.bind(controller)
);

carRouter.delete(
  "/car:id",
  AuthMiddleware,
  RoleMiddleware("admin"),
  controller.deleteCarController.bind(controller)
);

export default carRouter;
