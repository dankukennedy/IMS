// Importation of express
import express from 'express';

//Importation of Mongoose from mongoose
import mongoose from 'mongoose';

// dotenv package and Webpack configuration, you can efficiently manage environment variables in your React.js
import dotenv from 'dotenv';

//importing user.routes from route
import userRoutes from './routes/user.route.js';
// importing authRoutes from route
import authRoutes from './routes/auth.route.js'
// dotenv package and Webpack configuration
dotenv.config();

//mongoose connection 
mongoose.connect(process.env.MONGO).then( ()=>{
   console.log('MongooseDB is  connected');
}).catch((err)=>
{console.log(err)
});
 //Dalaration of app on express
const app = express();

//app runging on port
app.listen(3000, ()=> {
    console.log('server is loading on port 3000');
});
// api test using app.get 
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
