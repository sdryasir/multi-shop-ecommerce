import mongoose from 'mongoose';
import 'dotenv/config'
import * as cloudinary from 'cloudinary'


export const connectDb = async ()=>{    
    try {
        const res = await mongoose.connect(process.env.DB_URI);
        console.log('database is connected at port:', res.connection.port);
    } catch (error) {
        console.log('connection error', error);
    }
}


export const cloudinaryConfig = ()=>{
    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET,
        secure: true
      });
}