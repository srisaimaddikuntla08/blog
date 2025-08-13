import React from 'react'
import { assets } from '../assets/assets'
import { useAppContext } from '../AppContext'
import toast from 'react-hot-toast'

const CommentTableitem = ({comment, fetchComments}) => {
    const {blog,createdAt, _id} = comment
    const BlogDate = new Date(createdAt)

    const {axios,token} = useAppContext();

    const approveComment = async ()=>{
      try{
          const {data} = await axios.post('/api/admin/approve-comment',{id:_id},{
             headers :{
                    Authorization : `Bearer ${token}`
                }
          })
          if(data.success){
            toast.success(data.message);
            fetchComments()
          }else{
            toast.error(data.message)
          }
      }catch(error){
        toast.error(error.message)
      }
    }


     const deleteComment = async () => {
        const confirm = window.confirm("Do you really delete this comment")
        if (!confirm) return;
        try {
            const { data } = await axios.post('/api/admin/delete-comment', { id:_id },{
                headers :{
                    Authorization : `Bearer ${token}`
                }
            })
            if (data.success) {
                toast.success(data.message)
                await fetchComments()
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }








  return (
   <tr className='border-y border-gray-300'>
               <td className='px-2 py-4'>
                <b className='font-medium text-gray-600'>Blog</b> : {blog.title}
                <br />
                <br />
                <b className='font-medium text-gray-600'>Name</b>: {comment.name}
                <br />
                <b className='font-medium text-gray-600'>Comment</b>: {comment.content}
               </td>

               <td className='px-6 py-4 max-sm:hidden '>
                {BlogDate.toLocaleDateString()}
               
               </td>

               <td className='px-6 py-4 max-sm:hidden'>
                <div className='inline-flex items-center gap-4'>
                    {!comment.isApproved ?
                    <img src={assets.tick_icon} alt="tick" onClick={approveComment}
                    className='w-5 hover:scale-110 transition-all cursor-pointer' /> 
                    : <p className='text-xs border border-green-100 rounded-full px-3 py-1'>Approved</p>
                    }
                    <img src={assets.bin_icon} alt="bin" onClick={deleteComment} className='w-5 hover:sacle-110 transition-all cursor-pointer' />
                </div>
               </td>
               
           </tr> 
           
  )
}

export default CommentTableitem