import mongoose from 'mongoose'

const connectToDB = () => {

    if (mongoose.connections[0].readyState) {
        console.log('Already connected.')
        return;
    }

    mongoose.connect(process.env.MONGODB_URL, err => {
        if (err) throw err;
        console.log('Connected to mongodb.')
    })

    // mongoose.connect(process.env.MONGODB_URL)
    //     .then((res) => console.log(res))
    //     .catch(err => console.log(err))
}


export default connectToDB