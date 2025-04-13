import UserModel from "../models/user.model.js";
import bcrypt from "bcrypt";

const createAdmin = async (req, res, next) => {
  try {
    const fullName = "sobirjonahmadjonov";
    const email = "sobirjon12@gmail.com"; 
    const role = "admin";
    const password = "sobirjon1234";
    const existingUser = await UserModel.findOne({ fullName });
    if (existingUser) return; 
    const hashedPassword = await bcrypt.hash(password, 12);
    await UserModel.create({
      fullName,
      email,
      role, 
      password: hashedPassword,
    });
    console.log("Admin user yaratildi!");
  } catch (error) {
      next(error);
  }
};

export default createAdmin;
