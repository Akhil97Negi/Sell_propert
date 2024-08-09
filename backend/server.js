import express from 'express'
import { config } from 'dotenv'
import connectToDB from './src/configs/db.js';

config();
const app = express()
const port = 5500
const url = process.env.URL

app.use(express.json())


app.listen(port , async() =>{
    await connectToDB(url);
    console.log(`Servver is running on port ${port}`)
})


app.use('/api/user' , user);
app.use('/api/auth' , auth)

app.use((err, req, res, next) =>{
    const statusCode = err.statusCode || 500
    const message = err.message || 'Internal server error';
    return res.status(statusCode).json({
        sucess : false,
        statusCode,
        message
    })
})
