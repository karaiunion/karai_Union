import { Schema, Types, model, models } from 'mongoose'

const user = new Schema({
    memberShipNumber: {
        type: String,
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: Date,
        required: true,
    },
    phone: {
        type: Number,
        required: true
    },
    Address: {
        type: String,
        required: true,
    }
},
    {
        timestamps: true
    }
);


const counter = new Schema({
    _id: {
        type: String,
        name: String
    }
})

const year = new Date().getFullYear();
export const customID = `${year}_ ${new Types.ObjectId()}`
export const Counter = models.counter || model('counter', counter)
export const User = models.member || model('member', user)

