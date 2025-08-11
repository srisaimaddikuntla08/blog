import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      
    },
    suTitle: {
      type: String,
      
    },
    description: {
      type: String,
      required: true
    },
    image: {
      type: String, // can store image URL or path
      required: true
        
    },
    category: {
      type: String,
   
    },
    isPublished: {
      type: Boolean,
      required: true

    }
  },
  { timestamps: true }
);

const Blog = mongoose.model("Blog",blogSchema)

export default Blog;