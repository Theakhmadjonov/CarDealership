import UserModel from "../models/user.model.js";
import CustomError from "../utils/custom.error.js";
import JwtService from "./jwt.service.js";
import bcrypt from "bcrypt";

class AuthService {
  constructor() {
    this.jwtService = new JwtService();
    this.userModel = UserModel;
  }

  async register(data) {
    const findUser = await this.userModel.findOne({ fullName: data.fullName });
    if (findUser) throw new CustomError("FullName already existed", 401);
    const hashedPassword = await bcrypt.hash(data.password, 12);
    const staff = await this.userModel.create({
      ...data,
      password: hashedPassword,
    });
    return staff;
  }

  async login(fullName, password) {
    const findUser = await this.userModel.findOne({ fullName });
  if (!findUser) {
    throw new CustomError("FullName or password incorrect", 401);
  }
  const comparePassword = await bcrypt.compare(password, findUser.password);
  if (!comparePassword) {
    throw new CustomError("FullName or password incorrect", 401);
    }
    console.log(findUser.role);
  const token = this.jwtService.generateToken(findUser._id, findUser.role);
  return token;
  }
}
export default AuthService;
