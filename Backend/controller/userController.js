import {User} from "../model/userModel.js";
import bcrypt from "bcrypt";

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



export {register}