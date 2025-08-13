import React from 'react'
import { assets } from '../assets/assets'
import { useAppContext } from '../AppContext';
import toast from 'react-hot-toast';

const BlogTableitem = ({ blog, fetchBlogs, index }) => {

    const { title, createdAt } = blog;
    const blogDate = new Date(createdAt)


    const { axios, token } = useAppContext()
    const deleteBlog = async () => {
        const confirm = window.confirm("Ae you sure yow want to delete this blog ?")
        if (!confirm) return;
        try {
            const { data } = await axios.post('/api/blog/delete', { id: blog._id },{
                headers :{
                    Authorization : `Bearer ${token}`
                }
            })
            if (data.success) {
                toast.success(data.message)
                await fetchBlogs()
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    const togglePublish = async () => {
        try {
            const { data } = await axios.post('/api/blog/toggle-publish',{id:blog._id},{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            if (data.success) {
                toast.success(data.message)
                await fetchBlogs()
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }


    return (
        <tr className='border-y border-gray-300'>
            <th scope='row' className='px-2 py-4'>{index}</th>
            <td className='px-2 py-4'>{title}</td>
            <td className='px-2 py-4 md-sm:hidden'>{blogDate.toLocaleDateString()}</td>
            <td className='px-2 py-4 md-sm:hidden'>
                <p className={`${blog.isPublished ? 'text-green-800' : 'text-orange-700'}`}>{blog.isPublished ? 'published' : 'unPublished'}</p>
            </td>
            <td className='px-2 py-4 flex items-center text-xs gap-3'>
                <button onClick={togglePublish} className='border px-2 py-0.5 mt-1 rounded cursor-pointer'>{blog.isPublished ? 'Unpublish' : 'Publish'}</button>
                <img src={assets.cross_icon} alt="crossicon" className='w-8 hover:scale-110 transition-all cursor-pointer' onClick={deleteBlog} />
            </td>
        </tr>

    )
}

export default BlogTableitem