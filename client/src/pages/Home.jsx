import React from 'react'
import Navbar from '../components/Navbar'
import SplitText from '../components/Splittext'
import Header from '../components/Header'
import BlogList from '../components/BlogList'


const Home = () => {
 const handleAnimationComplete = () => {
  console.log('All letters have animated!');
}
  return (
    <div>
    <Navbar/>
    <Header/>
    <BlogList/>
    </div>
  )
}

export default Home