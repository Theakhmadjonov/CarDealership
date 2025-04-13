import AuthService from "../services/auth.service.js";

class AuthController {
  constructor() {
    this.authService = new AuthService();
  }

  async registerController(req, res, next) {
    try {
      const data = req.body;
      const token = await this.authService.register(data);
      res.status(201).json({
        message: "Success",
        token: token,
      });
    } catch (error) {
      next(error);
    }
  }

  async loginController(req, res, next) {
    try {
      const { fullName, password } = req.body;
      const token = await this.authService.login(fullName, password);
      res.status(200).json({
        message: "Success",
        token: token,
      });
    } catch (error) {
      next(error);
    }
  }
}
export default AuthController;
