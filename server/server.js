import express, { urlencoded } from 'express'
import 'dotenv/config'
import cors from 'cors'
import connectDB from './config/db.js'
import adminRouter from './routes/adminRoutes.js'
import blogRouter from './routes/blogRoute.js'

const app = express()
const PORT = process.env.PORT || 8108


//middlewares
app.use(cors(
    {
  origin: "https://netblog.vercel.app", // or '*'
  credentials: true
}
))
app.use(express.json())



//database connection
await connectDB()

app.get("/",(req,res)=>{
    res.send("server is in work")
})
app.use("/api/admin",adminRouter);

app.use("/api/blog",blogRouter);




app.listen(PORT,()=>console.log(`server is running on port:${PORT}`));
