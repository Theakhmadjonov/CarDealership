import UserModel from "../models/user.model.js";
import CustomError from "../utils/custom.error.js";
import bcrypt from "bcrypt";
class UserService {
  constructor() {
    this.userModel = UserModel;
  }

  async createUser(data) {
    try {
      const findUser = await this.userModel.findOne({ full_name: data.full_name });
      if (findUser) throw new CustomError("User already exists", 404);
      const hashedPassword = await bcrypt.hash(data.password, 12);
      data.password = hashedPassword;
      const user = await this.userModel.create(data);
      return user;
    } catch (error) {
      throw new CustomError(error.message, 500);
    }
  }

  async getAllUsers() {
    try {
      const users = await this.userModel.find(); 
      return users;
    } catch (error) {
      throw new CustomError(error.message, 500);
    }
  }

  async getOneUser(id) {
    try {
      const findUser = await this.userModel.findById(data.id);
      return findUser;
    } catch (error) {
      throw new CustomError(error.message, 500);
    }
  }
}
export default UserService;
