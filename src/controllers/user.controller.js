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
}
export default UserController;
