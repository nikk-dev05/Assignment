import dotenv from "dotenv";
dotenv.config();
import UserModel from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


export const register = async (req, res) => {
    try{
  const {username,email, password } = req.body;
  if(!username || !email || !password){
    return res.status(401).json({
        message:"Please enter all the Field Properly"
    })
  }
  if(password.length<6){
    return res.status(401).json({
        message:"please enter password greater than  6"
    })
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await UserModel.create({ username,email, password: hashedPassword });

  res.status(201).json({ 
    message: "User registered successfully",
    body:user
   });
}
catch(error){
    res.status(500).json({ message: "ERROR", error: error.message });
}
};

export const login = async (req, res) => {
    try{
  const { email, password } = req.body;

  const user = await UserModel.findOne({ email });
  if (!user) return res.status(401).json({ message: "User not exist" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

  const token = jwt.sign({ id: user._id },process.env.JWT_SECRET ,{expiresIn: "1hr"});
  res.json({ token });
    }
    catch(error){
          res.status(500).json({ message: "ERROR", error: error.message });
    }
};
