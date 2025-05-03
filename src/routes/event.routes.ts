import express from 'express';
import { createEvent } from '../controllers/event.controllers';


const router = express.Router();

router.post("/", createEvent);

export default router;