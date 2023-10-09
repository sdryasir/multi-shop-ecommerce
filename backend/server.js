import express from 'express';
import bodyParser from 'body-parser';
const app = express();
import prodctRoutes from './routes/productRoutes.js'
import { connectDb } from './config/config.js';
import { errorMiddleware } from './middleware/errorMiddleware.js';
import 'dotenv/config'

connectDb();
app.use(bodyParser.json())

app.use('/api', prodctRoutes)

app.use(errorMiddleware)


app.listen(process.env.SERVER_PORT, (c)=>{
    console.log('Server is listening at port 8000')
});











