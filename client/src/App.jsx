  import { Route, Routes } from "react-router-dom"
import Blog from "./pages/Blog"
import Home from "./pages/Home"
import Addblog from './pages/admin/Addblog'
import Comment from './pages/admin/Comment'
import Dashboard from './pages/admin/Dashboard'
import Layout from './pages/admin/Layout'
import Listblog from './pages/admin/Listblog'
import Login from "./components/admin/Login"






  function App() {

    return (
      <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/blog/:id" element={<Blog/>}/>

        <Route path="/admin" element={true ? <Layout/> : <Login/>}>
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
