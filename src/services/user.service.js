import UserModel from "../models/user.model.js";
import CustomError from "../utils/custom.error.js";

class UserService {
  constructor() {
    this.userModel = UserModel;
  }

  async createUser(data) {
    try {
      const user = await this.userModel.create(data);
      return user;
    } catch (error) {
      throw new CustomError(error.message, 500);
    }
  }
}
export default UserService;
