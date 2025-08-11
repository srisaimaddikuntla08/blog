import React, { useEffect, useState } from 'react'
import { blog_data } from '../../assets/assets'
import BlogTableitem from '../../components/BlogTableitem'

const Listblog = () => {

  const [blogs,setBlogs] = useState([]);

  const fetchBlogs = async()=>{
    setBlogs(blog_data)
  }

  useEffect(()=>{
      fetchBlogs();
  },[])


  return (
    <div className='flex-1 pt-5 px-5 sm:pt-12 sm:pl-16 bg-blue-50/50'>
      <h1>All Blogs</h1>

        < div className='relative  max-w-4xl h-4/5 overflow-x-auto mt-3 shadow rounded-lg scrollbar-hide bg-white'>
  <table className='w-full text-sm text-gray-700'>
    <thead className='text-xs text-gray-600 uppercase bg-gray-100 '>
      <tr>
        <th scope='col' className='px-2 py-4 xl:px-6 text-left'>#</th>
        <th scope='col' className='px-2 py-4 text-left'>Blog Title</th>
        <th scope='col' className='px-2 py-4 max-sm:hidden text-left'>Date</th>
        <th scope='col' className='px-2 py-4 max-sm:hidden text-left'>Status</th>
        <th scope='col' className='px-2 py-4 text-left'>Actions</th>
      </tr> 
    </thead> 
    <tbody className='divide-y divide-gray-200'>
      {blogs.map((blog, index) => (
        <BlogTableitem
          key={blog._id}
          blog={blog}
          fetchBlogs={fetchBlogs}
          index={index + 1}
        />
      ))}
    </tbody>
  </table>
</div>

    </div>
  )
}

export default Listblog
