import express from 'express'
import cors from 'cors'
import "dotenv/config"
import job from './lib/cron.js'

import authRoutes from "./routes/authRoutes.js"
import bookRoutes from './routes/bookRoutes.js'
import {connectDB} from './lib/db.js'

const app = express()
const PORT = process.env.PORT || 3000

job.start()
app.use(cors())
app.use(express.json())//allows you pass json data

app.use("/api/auth", authRoutes)
app.use("/api/auth", bookRoutes)


app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
    connectDB()
})