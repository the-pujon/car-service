import { model, Schema } from "mongoose";
import { TSlot } from "./slot.interface";

const SlotSchema = new Schema<TSlot>({
    service: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    startTime: {
        type: Date,
        required: true
    },
    endTime: {
        type: Date,
        required: true
    },
    isBooked: {
        type: Boolean,
        default: false
    }
})

export const SlotModel = model<TSlot>("Slot", SlotSchema)