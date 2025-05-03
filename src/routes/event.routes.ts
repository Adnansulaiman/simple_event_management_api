import express from 'express';
import { createEvent, getAllEvents, getAnEvent } from '../controllers/event.controllers';


const router = express.Router();

router.post("/", createEvent);
router.get("/", getAllEvents);
router.get("/:id", getAnEvent);

export default router;