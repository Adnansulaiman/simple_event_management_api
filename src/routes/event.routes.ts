import express from 'express';
import { createEvent, deleteEvent, getAllEvents, getAnEvent, updateEvent } from '../controllers/event.controllers';


const router = express.Router();

router.post("/", createEvent);
router.get("/", getAllEvents);
router.get("/:id", getAnEvent);
router.put("/:id", updateEvent);
router.delete("/:id", deleteEvent);

export default router;