import fs from 'fs'
import imagekit from '../config/imagekit.js';
import Blog from '../models/blog.js';
import Comment from '../models/comment.js';


export const addBlog = async (req,res)=>{
        try{
            const {title,subTitle,category,description,isPublished} = JSON.parse(req.body.blog);

            const imageFile = req.file;

            if(!title||!subTitle||!category||!description||!imageFile){
                return res.json({success:false,message:"missing required fields"})
            }

            const fileBuffer = fs.readFileSync(imageFile.path)

            //upload image to imagekit
            const response  = await imagekit.upload({
                file: fileBuffer,
                fileName: imageFile.originalname,
                folder : "/blogs"
            })


            //optimize image through imagekit
            const optimizedImageURL = imagekit.url({
               path : response.filePath,
              transformation : [{
                "quality": "auto",
                 "width" : "1280",
                 "format" : "webp"
          }]
    });

            const image = optimizedImageURL;

            await Blog.create({
                title,
                subTitle,
                description,
                image,
                isPublished,
                category
            })

            return res.json({success : true, message : "blog added successfully"})


        }catch(error){
            res.json({success:false,message:error.message})
        }
}


export const getAllBlogs = async (req,res)=>{
            try{
                const blogs =  await Blog.find({isPublished:true})
                return res.json({success : true, blogs })
            }catch(error){
             res.json({success:false,message:error.message})
        
            }   
}


export const getBlogById = async (req,res)=>{
            try{
                const {blogId} = req.params
                const blog = await Blog.findById(blogId) 
                if(!blog){
                    return res.json({success:true,message:"Blog not found"})
                }
                 res.json({success : true, blog })
            }catch(error){
             res.json({success:false,message:error.message})
        
            }   
}



export const deleteBlogById = async (req,res)=>{
            try{
                const {id} = req.body
                 await Blog.findByIdAndDelete(id) 

                //Delete all comments associted with the blog;
                 await Comment.deleteMany({blog:id}) 

               
                 res.json({success : true, message:"Blog deleted successfully" })
            }catch(error){
             res.json({success:false,messae:error.message})
        
            }   
}


export const togglePublish = async (req,res)=>{
            try{
                const {id} = req.body
                const blog = await Blog.findById(id) 
                blog.isPublished = !blog.isPublished
                await blog.save();
                 res.json({success : true, message:"Blog status updated" })
            }catch(error){
             res.json({success:false,message:error.message})
        
            }   
}



export const addComment = async (req,res)=>{
            try{
                const {blog,name,content} = req.body
                await Comment.create({blog,name,content})
                res.json({success : true, message:"Comment added for review" })
            }catch(error){
             res.json({success:false,messae:error.message})
        
            }   
}


export const getBlogComments = async (req,res)=>{
            try{
                const {blogId} = req.body
                const comments = await Comment.find({blog:blogId,isApproved:true}).sort({createdAt:-1})
                res.json({success : true, comments })
            }catch(error){
             res.json({success:false,message:error.message})
        
            }   
}


















