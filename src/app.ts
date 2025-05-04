import dotenv from 'dotenv';
dotenv.config();

import express,{Request,Response} from 'express';
import { errorHandler } from './middlewares/errorHandler';
import connectDB from './config/db';
import eventRoutes from './routes/event.routes'

const app = express();

app.use(express.json());

// routes
app.get('/',(req:Request,res:Response)=>{
    res.send("Hello Express + Typescript")
})

app.use('/events',eventRoutes);

// Global error handler
app.use(errorHandler);

// mongoDB connnection
connectDB();

export default app;