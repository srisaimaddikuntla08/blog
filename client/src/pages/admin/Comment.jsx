import React, { useEffect, useState } from 'react'
import { comments_data } from '../../assets/assets';
import CommentTableitem from '../../components/CommentTableitem';
import { useAppContext } from '../../AppContext';
import toast from 'react-hot-toast';

const Comment = () => {
  const [comments,setComments] = useState([]);
  const [filter,setFilter] = useState("Not Approved")

  const {axios,token} = useAppContext();

  const fetchComments = async ()=>{
    try{
    const {data} = await axios.get('/api/admin/comments',{
       headers: {
        Authorization: `Bearer ${token}`
      }
    })
    data.success ? setComments(data.comments) : toast.error(data.message)
  }catch(error){
    toast.error(error.message)
  }
  }


  useEffect(()=>{
    fetchComments();
  },[])


  return (
    <div className='flex-1 pt-5 px-5 sm:pt-12 sm:pl-16 bg-blue-50/50'>

      <div className='flex justify-between  items-center max-w-4xl'>

        <h1>Comments</h1>

        <div className='flex gap-4'>
          <button onClick={()=>setFilter("Approved")} className={`shadow-custom-sm border rounded-full px-4 py-1 cursor-pointer text-xs ${filter === 'Approved'?'text-primary': 'text-gray-700'}`}>Approved</button>
          <button  onClick={()=>setFilter("Not Approved")} className={`shadow-custom-sm border rounded-full px-4 py-1 cursor-pointer text-xs ${filter === 'Not Approved'?'text-primary': 'text-gray-700'}`}>Not Approved</button>

        </div>

      </div>

        <div className='relative h-4/5 max-w-3xl overflow-x-auto mt-4 bg-white shadow rounded-lg scrollbar-hide'>
        <table className='w-full text-sm text-gray-700'>
        <thead className='text-xs text-gray-600 uppercase bg-gray-100'>
        <tr>
        <th scope='col' className='px-2 py-4 xl:px-6 text-left'>Blog Title & comment</th>
        <th scope='col' className='px-2 py-4 max-sm:hidden'>Date</th>
        <th scope='col' className='px-2 py-4'>Actions</th>
      </tr>
      </thead> 
      <tbody className='divide-y divide-gray-200'>
      {comments.filter((comment) => {
        if(filter ==="Approved") return comment.isApproved === true;
        return comment.isApproved === false;
      }).map((comment,index)=>(
        <CommentTableitem key={comment._id} comment={comment} index={index+1} fetchComments={fetchComments}/> 
      ))}
    </tbody>
      </table>
    </div>

    </div>
  )
}

export default Comment