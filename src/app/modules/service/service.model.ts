import { model, Schema } from "mongoose";
import { TService } from "./service.interface";

const serviceSchema = new Schema<TService>({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    duration: { type: String, required: true },
    isDelete: {type: Boolean, default: false}
})

export const ServiceModel = model<TService>('Service', serviceSchema);