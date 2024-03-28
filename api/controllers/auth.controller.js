import { error } from "console"
import User from "../models/user.model.js"
import bcryptjs from 'bcryptjs'
import { errorHandler } from "../utils/error.js"

export const signup = async (req, res, next) => {
    // Declaration of username and password
    const {username, password} = req.body

    //test if their not empty
    if(!username || !password || username ==='' || password ===''){
      next(errorHandler(400,'All field are required'));
    }

    const hashedPassword = bcryptjs.hashSync(password, 10)

    const newUser = new User({
         username,
         password: hashedPassword
    });
   try {
    await newUser.save();
    res.json('Signup Successful');
   } catch (error) {
   next(error);
   }

}
