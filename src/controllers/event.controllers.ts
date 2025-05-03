import {Response, Request, NextFunction} from 'express';
import Event from '../models/Event';

// POST /events - create an event
export const createEvent = async (req:Request,res:Response,next:NextFunction):Promise<void> => {
    try{
        const {title, description, date} = req.body;

        // validation
        if(!title || !description || !date){
            res.status(400).json({message:"All fields are required."});
            return;
        }

        // event validation 
        const eventDate = new Date(date);
        if(isNaN(eventDate.getTime())){
            res.status(400).json({message:"Invalid date format."});
            return;
        }
        
        // create event
        const newEvent = new Event({
            title,
            description,
            date:eventDate,
        });
        await newEvent.save();
        res.status(201).json(newEvent);
    }catch(err){
        next(err);
    }
}