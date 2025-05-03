import express from 'express';
import { createEvent, getAllEvents } from '../controllers/event.controllers';


const router = express.Router();

router.post("/", createEvent);
router.get("/", getAllEvents);

export default router;