import React from 'react'
import {assets} from "../assets/assets"
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate();

  return (
    <div className='flex justify-between items-center py-5 mx-8 sm:mx-20 xl:mx-32 cursor-pointer'>
      <img src={assets.logo} alt="LOGO"  className='w-32 sm:w-44 '  onClick={()=>navigate("/")}/>  
      <button
       onClick={()=>navigate("/admin")}
       className='flex items-center gap-2 rounded-full text-sm cursor-pointer bg-primary text-white px-10 py-2.5'>
    Login 
        <img src={assets.arrow } alt="arrow icom" className='w-3' />    
      </button>
   </div>
  )
}

export default Navbar