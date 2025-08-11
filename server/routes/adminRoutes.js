import express from 'express'
const adminRouter = express.Router();

import { adminLogin } from '../controllers/adminController.js';



adminRouter.post('/login', adminLogin )





export default adminRouter;

