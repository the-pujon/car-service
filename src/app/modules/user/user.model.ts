import { model, Schema } from "mongoose";
import { TAddress,TUser } from "./user.interface";

const addressSchema = new Schema<TAddress>({
    street: { type: String,required: true },
    city: { type: String,required: true },
    state: { type: String,required: true },
    zip: { type: String,required: true },
})

const userSchema = new Schema<TUser>({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    role: {
        type: String,
        enum: ["admin","user"],
        default: 'user'
    },
    address: {
        type: addressSchema,
        required: true
    }
})

export const UserModel = model<TUser>('User', userSchema)