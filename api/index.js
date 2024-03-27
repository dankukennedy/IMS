import express from 'express';
import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://admin:admin@ims.inbmosu.mongodb.net/ims?retryWrites=true&w=majority').then( ()=>{
   console.log('MongooseDB is  connected');
}).catch((err)=>
{console.log(err)
});
 
const app = express();

app.listen(3000, ()=> {
    console.log('server is loading on port 3000');
});