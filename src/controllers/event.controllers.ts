import {Response, Request, NextFunction} from 'express';
import Event from '../models/Event';

// POST /events - create an event
export const createEvent = async (req:Request,res:Response,next:NextFunction):Promise<void> => {
    try{
        const {title, description, date} = req.body;

        // validation
        if(!title || !description || !date){
            const error = new Error('All fields are required');
            (error as any).status = 400;
            throw error;
        }

        // event validation 
        const eventDate = new Date(date);
        const now = new Date();
        if (isNaN(eventDate.getTime())) {
            const error = new Error('Invalid date format');
            (error as any).status = 400;
            throw error;
        }
        if (eventDate < now) {
            const error = new Error('Event date cannot be in the past');
            (error as any).status = 400;
            throw error;
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

// GET /events - Get all events
export const getAllEvents = async (req:Request,res:Response,next:NextFunction):Promise<void> => {
    try{
        const events = await Event.find({});
        res.status(200).json(events)
    }catch(err){
        next(err);
    }
}

// GET /events/:id - Get an event
export const getAnEvent = async (req:Request, res:Response, next:NextFunction):Promise<void> =>{
    try{
        const {id} = req.params;
        const event = await Event.findById(id)
        if(!event){
            const error = new Error('Event not found');
            (error as any).status = 404;
            throw error;
        }
        res.status(200).json(event);
    }catch(error){
        next(error);
    }
}

// PUT /events/:id - update an event
export const updateEvent = async (req:Request,res:Response,next:NextFunction): Promise<void> =>{
    try{
        const { title, description, date } = req.body;
        const {id} = req.params;

        const updateData: any = {};
        if (title) updateData.title = title;
        if (description) updateData.description = description;
        if (date) {
            const eventDate = new Date(date);
            const now = new Date();
            if (isNaN(eventDate.getTime())) {
                const error = new Error('Invalid date format');
                (error as any).status = 400;
                throw error;
            }
            if (eventDate < now) {
                const error = new Error('Event date cannot be in the past');
                (error as any).status = 400;
                throw error;
            }
            updateData.date = eventDate;
        }
        

        const updatedEvent = await Event.findByIdAndUpdate(id,updateData,{new:true});
        if(!updatedEvent){
            const error = new Error('Event not found');
            (error as any).status = 404;
            throw error;
        }
        res.status(200).json(updatedEvent)
    }catch(error){
        next(error)
    }
}

// DELETE /events/:id - Delete an event
export const deleteEvent = async (req:Request, res:Response, next:NextFunction):Promise<void> =>{
    try{
        const {id} = req.params;
        const deletedEvent = await Event.findByIdAndDelete(id);
        if(!deletedEvent){
            const error = new Error('Event not found');
            (error as any).status = 404;
            throw error;
        }

        res.status(200).json({message:"Event deleted successfully."})
    }catch(error){
        next(error)
    }
}