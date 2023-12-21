import express from 'express'
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRoutes from './routes/user.js'
import authRoutes from './routes/auth.js'
import listingRoutes from './routes/listing.js'
import cookieParser from 'cookie-parser';
import path from 'path';
dotenv.config();


mongoose
    .connect(process.env.MONGO)
    .then(()=>{
        console.log("DEVELOPMENT IN PROGRESS");
        
    })
    .catch((err)=>{
        console.log(err);
        
    })



const __dirname = path.resolve();

const app = express();
const PORT  = 'http://localhost:5000';
app.get('/',(req,res)=>{
    res.send("HIII")
})
app.use(express.json())
app.use(cookieParser())
app.use('/api/user',userRoutes)
app.use('/api/auth',authRoutes)
app.use('/api/listing',listingRoutes)

app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
})

app.listen(5000,()=>{
    console.log(`Server is Running at ${PORT}`);
    
})



app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
      success: false,
      statusCode,
      message,
    });
  });