import jwt from 'jsonwebtoken';
import Blog from '../models/blog.js';
import Comment from '../models/comment.js';


export const adminLogin = async (req,res)=>{
    
    try{

        const {email,password} = req.body;

        if(email !== process.env.ADMIN_EMAIL || password !== process.env.ADMIN_PASSWORD){
            return res.json({success : false, message:"Invalid credentials"})
        }

        const token =jwt.sign({email},process.env.JWT_SECRET);
         return res.json({success:true,token})

    }catch(error){
        res.json({success:false,message:error.message})
    }
}



export const getAllBlogsAdmin = async (req,res)=>{
            try{
                const blogs = await Blog.find({}).sort({createdAt:-1})
                res.json({success : true, blogs })
            }catch(error){
             res.json({success:false,message:error.message})
        
            }   
}


export const getAllComments = async (req,res)=>{
            try{
                const comments = await Comment.find({}).populate("blog").sort({createdAt:-1})
                res.json({success : true, comments })
            }catch(error){
             res.json({success:false,message:error.message})
        
            }   
}



export const getDashboard = async ()=>{
    try{
        const recentBlogs = await Blog.find({}).sort({createdAt:-1}).limit(5)
        const blogs  = await Blog.countDocuments();
        const comments = await Comment.countDocuments();
        const drafts = await Blog.countDocuments({isPublished: true})

        const dashboardData ={
            recentBlogs,blogs,comments,drafts
        }


    }catch(error){
        res.json({success: false,})
    }   
}




