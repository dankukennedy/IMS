import express from 'express';
import { test } from '../controllers/user.controller.js';

//Declaration of router on express
const router = express.Router();

router.get('/test', test );


export default router;