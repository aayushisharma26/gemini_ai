import {User} from "../model/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const register = async (req, res) => {
    const { name, email, password } = req.body;
    
    try {
      if (!name || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
      }
  
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({ name, email, password: hashedPassword });
      // console.log(newUser)
      await newUser.save();
  
      return res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      // console.error(error);
      return res.status(500).json({ message: 'Server error' });
    }
  }


const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    // console.log("🔹 Password match:", isPasswordCorrect);

    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
    // console.log(" Token generated:", token);

    res.status(200).json({ message: "Login Successfully", token, user: { name: user.name, email: user.email } });

  } catch (error) {
    // console.error(" Error in login:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export { register, login };
