import express from 'express'
const adminRouter = express.Router();
import { authentication } from '../middlewares/auth.js';

import { adminLogin, approveCommentById, deleteCommentById, getAllBlogsAdmin, getAllComments, getDashboard } from '../controllers/adminController.js';



adminRouter.post('/login', adminLogin )
adminRouter.get('/comments',authentication,getAllComments)
adminRouter.get('/blogs',authentication,getAllBlogsAdmin)
adminRouter.post('/delete-comment',authentication,deleteCommentById )
adminRouter.post('/approve-comment',authentication,approveCommentById )
adminRouter.get('/dashboard',authentication,getDashboard)












export default adminRouter;

