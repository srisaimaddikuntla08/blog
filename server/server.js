import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import connectDB from './config/db.js'

const app = express()
const PORT = process.env.PORT || 8108


//middlewares
app.use(cors())
app.use(express.json())


//database connection
await connectDB()

app.get("/",(req,res)=>{
    res.send("server is in work")
})



app.listen(PORT,()=>console.log(`server is running on port:${PORT}`));
