import mongoose from 'mongoose'

const cardSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        unique: true

    },
    location: {
        type: String,
        required: true
    },
    images: {
        type: String,
        required: true
    },

    type: {
        type: String,
        required: true
    },
    rooms: {
        type: String,
        required: true
    }

}, {
    timestamps: true
})

let Dataset = mongoose.models.card || mongoose.model('card', cardSchema)
export default Dataset