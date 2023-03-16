import connectToDB from '../../../utils/connectToDb'
import Houses from '../../../models/houseModel'
import auth from '../../../middleware/auth'

connectToDB()

export default async (req, res) => {
    switch (req.method) {
        case "GET":
            await getHouses(req, res)
            break;
        case "POST":
            await createHouse(req, res)
            break;
    }
}



const getHouses = async (req, res) => {
    try {

        const houses = await Houses.find()
        res.json({
            status: 'success',
            result: houses.length,
            houses
        })
    } catch (err) {
        return res.status(500).json({ err: err.message })
    }
}

const createHouse = async (req, res) => {
    try {
        const result = await auth(req, res)
        if (result.role !== 'admin') return res.status(400).json({ err: 'Authentication is not valid.' })

        const { title, price, description, location, type, images, rooms } = req.body

        if (!title || !price || !location || !description || !type || !rooms || images.length === 0)
            return res.status(400).json({ err: 'Please add all the fields.' })


        const newHouse = new Houses({
            title: title.toLowerCase(), price, description, location, type, images, rooms
        })

        await newHouse.save()

        res.json({ msg: 'Success! Created a new house card' })

    } catch (err) {
        return res.status(500).json({ err: err.message })
    }
}