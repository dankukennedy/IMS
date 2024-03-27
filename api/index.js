import express from 'express';

const app = express();

app.listen(3000, ()=> {
    console.log('server is loading on port 3000');
});