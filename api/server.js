// Declaring constant express
const express = require("express");
//Declaring constant cors
//const  cors = require('cors');
//const path = require('path');
//declaring Port 
const PORT = process.env.PORT || 3500;

//Declaring constant app to use express 
const app = express();  
//app listeniing to port
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});