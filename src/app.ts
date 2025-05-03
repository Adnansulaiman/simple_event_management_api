import express,{Request,Response} from 'express';
import { errorHandler } from './middlewares/errorHandler';


const app = express();

app.use(express.json());

// routes
app.get('/',(req:Request,res:Response)=>{
    res.send("Hello Express + Typescript")
})

// Global error handler
app.use(errorHandler);

export default app;