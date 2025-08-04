import React from 'react'
import Navbar from '../components/Navbar'
import SplitText from '../components/Splittext'
import Header from '../components/Header'
import BlogList from '../components/BlogList'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'


const Home = () => {
  
  return (
    <div>
    <Navbar/>
    <Header/>
    <BlogList/>
    <Newsletter/>
    <Footer/>
    </div>
  )
}

export default Home