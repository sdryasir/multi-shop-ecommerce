import express from 'express';
import bodyParser from 'body-parser';
const app = express();
import prodctRoutes from './routes/productRoutes.js'
import authRoutes from './routes/authRoutes.js'
import { connectDb, cloudinaryConfig } from './config/config.js';
import { errorMiddleware } from './middleware/errorMiddleware.js';
import 'dotenv/config'
import cors from 'cors'
import cookieParser from 'cookie-parser'
connectDb();
cloudinaryConfig();


app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors({credentials: true, origin: 'http://localhost:5173'}));
app.use('/api', prodctRoutes, authRoutes)

app.use(errorMiddleware)


app.listen(process.env.SERVER_PORT, (c)=>{
    console.log('Server is listening at port 8000')
});











