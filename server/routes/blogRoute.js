import express from 'express'
import { addBlog, addComment, deleteBlogById, getAllBlogs, getBlogById, getBlogComments, togglePublish } from '../controllers/blogController.js'
import upload from '../middlewares/multer.js';
import { authentication } from '../middlewares/auth.js';
const blogRouter = express.Router()


blogRouter.post("/addBlog",upload.single('image'),authentication,addBlog);
blogRouter.get("/all",getAllBlogs);
blogRouter.get("/:blogId",getBlogById);
blogRouter.delete("/delete",authentication,deleteBlogById);
blogRouter.post("/toggle-publish",authentication,togglePublish);


//for comments
blogRouter.post("/addComment",addComment);
blogRouter.get("/comments",getBlogComments);







export  default blogRouter;


