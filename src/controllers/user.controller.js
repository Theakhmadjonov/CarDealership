import UserService from "../services/user.service.js";

class UserController {
  constructor() {
    this.userService = new UserService();
  }

  async createUserController(req, res, next) {
    try {
      const data = req.body;
      const user = await this.userService.createUser(data);
      res.status(201).json({
        message: "User created",
        data: user,
      });
    } catch (error) {
      next(error);
    }
  }

  async getAllUsersController(req, res, next) {
    try {
      const data = await this.userService.getAllUsers();
      res.status(200).json({
        message: "Success",
        data: data,
      });
    } catch (error) {
      next(error);
    }
  }

  async getOneUserController(req, res, next) {
    try {
      const { id } = req.params;
      const user = await this.userService.getOneUser(id);
      res.status(200).json({
        message: "Success",
        data: user,
      });
    } catch (error) {
      next(error);
    }
  }
}
export default UserController;
