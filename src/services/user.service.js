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
      const findUser = await this.userModel.findById(id);
      return findUser;
    } catch (error) {
      throw new CustomError(error.message, 500);
    }
  }

  async updateUser(id, data) {
    try {
      const findUser = await this.userModel.findById(id);
      if (!findUser) throw new CustomError("User not found", 404);
      const updatedUser = await this.userModel.findByIdAndUpdate(id, data, { new: true });
      return updatedUser;
    } catch (error) {
      throw new CustomError(error.message, 500);
    }
  }

  async deleteUser(id) {
    try {
      const findUser = await this.userModel.findById(id);
      if (!findUser) throw new CustomError("User not found", 404);
      const deletedUser = await this.userModel.findByIdAndDelete(id);
      return deletedUser;
    } catch (error) {
      throw new CustomError(error.message, 500);
    }
  }
}
export default UserService;
