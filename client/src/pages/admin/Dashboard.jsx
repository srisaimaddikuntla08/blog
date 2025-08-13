import React, { useEffect, useState } from 'react'
import { assets, dashboard_data } from '../../assets/assets'
import BlogTableitem from '../../components/BlogTableitem';
import { useAppContext } from '../../AppContext';
import toast from 'react-hot-toast';

const Dashboard = () => {

  const [dashboardData, setDashboardData] = useState({
    blogs: 0,
    comments: 0,
    drafts:0,
    recentBlogs: []
  });

  const {axios,token} = useAppContext();

  const fetchDashboard = async () => {
    try{
      const {data} = await axios.get('/api/admin/dashboard',{
        headers: {
                    Authorization: `Bearer ${token}`
                }
      })
      data.success ? setDashboardData(data.dashboardData) : toast.error(data.message)
    }catch(error){
      toast.error(error.message)
    }
  }


  useEffect(() => {
    fetchDashboard();
  }, [])


  return (
    <div className='flex-1 p-4 md:p-10 bg-blue-50/50'>

      <div className='flex flex-wrap gap-4'>

        <div className='flex items-center gap-4 bg-white p-4 min-w-58 rounded shadow cursor-pointer hover:scale-105 transition-all'>
          <img src={assets.dashboard_icon_1} alt="dashicon2" />
          <div>
            <p>{dashboardData.blogs}</p>
            <p className='text-gray-400 font-light'>Blogs </p>
          </div>
        </div>


        <div className='flex items-center gap-4 bg-white p-4 min-w-58 rounded shadow cursor-pointer hover:scale-105 transition-all'>
          <img src={assets.dashboard_icon_2} alt="dashicon3" />
          <div>
            <p>{dashboardData.comments}</p>
            <p className='text-gray-400 font-light'>Comments</p>
          </div>
        </div>


        <div className='flex items-center gap-4 bg-white p-4 min-w-58 rounded shadow cursor-pointer hover:scale-105 transition-all'>
          <img src={assets.dashboard_icon_3} alt="dashicon1" />
          <div>
            <p>{dashboardData.drafts}</p>
            <p className='text-gray-400 font-light'>Drafts</p>
          </div>
        </div>

      </div>

      <div>

      <div className='flex items-center gap-3 m-4 mt-6 text-gray-600'>
        <img src={assets.dashboard_icon_4} alt="dash4" />
        <p>Latest Blogs</p>
      </div>



      {/* <div className='relative max-w-4xl overflow-x-auto shadow rounded-lg scrollbar-hide bg-white'>
        <table className='w-full text-sm text-gray-500'>
          <thead className='text-xs text-gray-600 text-left uppercase'>
            <tr>
              <th scope='col px-2 py-4 xl:px-6'>#</th>
              <th scope='col px-2 py-4'>Blog Title</th>
              <th scope='col px-2 py-4 max-sm:hidden'>Date</th>
              <th scope='col px-2 py-4 max-sm:hidden'>Status</th>
              <th scope='col px-2 py-4'>Actions</th>
            </tr>
          </thead> 
          <tbody>
            {dashboardData.recentBlogs.map((blog,index)=>(
              <BlogTableitem key={blog._id} blog={blog} fetchBlogs={fetchDashboard} index={index + 1}/>
            ))}
          </tbody>
        </table>



      </div> */}


      < div className='relative max-w-4xl overflow-x-auto shadow rounded-lg scrollbar-hide bg-white'>
  <table className='w-full text-sm text-gray-700'>
    <thead className='text-xs text-gray-600 uppercase bg-gray-100'>
      <tr>
        <th scope='col' className='px-2 py-4 xl:px-6 text-left'>#</th>
        <th scope='col' className='px-2 py-4 text-left'>Blog Title</th>
        <th scope='col' className='px-2 py-4 max-sm:hidden text-left'>Date</th>
        <th scope='col' className='px-2 py-4 max-sm:hidden text-left'>Status</th>
        <th scope='col' className='px-2 py-4 text-left'>Actions</th>
      </tr>
    </thead> 
    <tbody className='divide-y divide-gray-200'>
      {dashboardData.recentBlogs.map((blog, index) => (
        <BlogTableitem
          key={blog._id}
          blog={blog}
          fetchBlogs={fetchDashboard}
          index={index + 1}
        />
      ))}
    </tbody>
  </table>
</div>


      </div>


    </div>
  )
}

export default Dashboard