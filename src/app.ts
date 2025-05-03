import express,{Request,Response} from 'express';


const app = express();

app.use(express.json());

// routes
app.get('/',(req:Request,res:Response)=>{
    res.send("Hello Express + Typescript")
})

export default app;