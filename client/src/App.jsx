  import { Route, Routes } from "react-router-dom"
import Blog from "./pages/Blog"
import Home from "./pages/Home"
import Addblog from './pages/admin/Addblog'
import Comment from './pages/admin/Comment'
import Dashboard from './pages/admin/Dashboard'
import Layout from './pages/admin/Layout'
import Listblog from './pages/admin/Listblog'
import Login from "./components/admin/Login"
import 'quill/dist/quill.snow.css'
import {Toaster} from 'react-hot-toast';
import { useAppContext } from "./AppContext"








  function App() {
    const {token} = useAppContext()
    return (
      <>
      <Toaster/>  
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/blog/:id" element={<Blog/>}/>

        <Route path="/admin" element={token ? <Layout/> : <Login/>}>
          <Route index element={<Dashboard/>} />
          <Route path="addblog" element={<Addblog/>} />
          <Route path="listblog" element={<Listblog/>} />
          <Route path="comment" element={<Comment/>} />
        </Route>
      </Routes>
      </>
    )
  }

  export default App
