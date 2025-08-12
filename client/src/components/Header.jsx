import React from 'react'
import { assets } from '../assets/assets'
import  SplitText  from './Splittext.jsx'
import { useAppContext } from '../AppContext.jsx'

const Header = () => {
  const {input,setInput} = useAppContext()


  return (
    <div className='mx-8 sm:mx-16 xl:mx-24 relative'>
        <div className='text-center mt-20 mb-8'>
            <div className='inline-flex items-center justify-center  gap-4 px-6 py-1.5 mb-4 border border-primary/40 bg-primary/10 rounded-full text-sm text-primary'>
                <p>New: AI feature integreated</p>
                <img src={assets.star_icon} alt="star-icon" className='w-2.5 ' />
            </div>
        </div>
        <img src={assets.gradientBackground} alt="" className='absolute -top-50 -z-1 opacity-50' />


        {/* Heading section  */}

       <div className="text-center mb-10">
        <SplitText
          text={ <>your own  <span className='text-blue-800'>Blogging</span> platform</> }
          className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-800 leading-tight"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.2}
          rootMargin="-100px"
          textAlign="center"
          onLetterAnimationComplete={() => {}}
        />
      </div>
      <p
       className=' my-6 sm:my-8 text-center  max-w-2xl m-auto max-sm:text-xs text-gray-500'>
        This is your space to think out loud, to share what matters,and to write without filters. Wheather 
        it's one word or thousand, your story starts ! </p>

        <form  className='flex justify-between  max-w-lg max-sm:scale-75 mx-auto border border-gray-600  overflow-hidden bg-white rounded ' >
            <input type="text"  placeholder='Search for blogs' required className='w-full pl-4 outline-none' onChange={(e)=>setInput(e.target.value)} />
            <button className='bg-primary text-white px-8 py-2 m-1.5 rounded hover:scale-105 transition-all curso-pointer '>Search</button>
        </form>

        
    </div>
  )
}

export default Header