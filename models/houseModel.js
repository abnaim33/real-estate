import mongoose from 'mongoose'

const houseSchema = new mongoose.Schema({
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
        type: Number,
        required: true
    }

}, {
    timestamps: true
})

let Dataset = mongoose.models.house || mongoose.model('house', houseSchema)
export default Dataset