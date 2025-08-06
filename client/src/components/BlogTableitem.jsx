import React from 'react'
import { assets } from '../assets/assets'   

const BlogTableitem = ({blog,fetchBlogs,index}) => {

    const {title,createdAt} = blog;
    const blogDate = new Date(createdAt)
  return (     
        <tr className='border-y border-gray-300'>
            <th scope='row' className='px-2 py-4'>{index}</th>
            <td className='px-2 py-4'>{title}</td>
            <td className='px-2 py-4 md-sm:hidden'>{blogDate.toLocaleDateString()}</td>
            <td className='px-2 py-4 md-sm:hidden'>
                <p className={`${blog.isPublished ?'text-green-800':'text-orange-700'}`}>{blog.isPublished ? 'published':'unPublished'}</p>
            </td>
            <td className='px-2 py-4 flex items-center text-xs gap-3'>
                <button className='border px-2 py-0.5 mt-1 rounded cursor-pointer'>{blog.isPublished ? 'Unpublish':'Publish'}</button>
                <img src={assets.cross_icon} alt="crossicon" className='w-8 hover:scale-110 transition-all cursor-pointer' />
            </td>
        </tr>
        
  )
}

export default BlogTableitem