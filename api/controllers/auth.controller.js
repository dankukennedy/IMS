import User from "../models/user.model.js"
import bcryptjs from 'bcryptjs'

export const signup = async (req, res) => {
    // Declaration of username and password
    const {username, password} = req.body

    //test if their not empty
    if(!username || !password || username ==='' || password ===''){
       return res.status(400).json({message:'All fild are required'})
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
    res.status(500).json({message:error.message});
   }

}
