import mongoose, { Document, Schema } from "mongoose";

// Define interface for event
export interface IEvent extends Document {
  title: string;
  description: string;
  date: Date;
}

// Create mongoose schema
const eventSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps:true
  }
);

// create the model
const Event = mongoose.model<IEvent>('Event',eventSchema);

export default Event;
