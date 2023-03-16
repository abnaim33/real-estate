
import connectToDB from '../../../utils/connectToDb';
import auth from '../../../middleware/auth'
import Houses from '../../../models/houseModel'
connectToDB()

export default async (req, res) => {
    switch (req.method) {
        case "GET":
            await getHouse(req, res)
            break;
        case "PUT":
            await updateHouse(req, res)
            break;
        case "DELETE":
            await deleteHouse(req, res)
            break;
    }
}

const getHouse = async (req, res) => {
    try {
        const { id } = req.query;

        const House = await Houses.findById(id)
        if (!House) return res.status(400).json({ err: 'This House does not exist.' })

        res.json({ House })

    } catch (err) {
        return res.status(500).json({ err: err.message })
    }
}

const updateHouse = async (req, res) => {
    try {
        const result = await auth(req, res)
        if (result.role !== 'admin')
            return res.status(400).json({ err: 'Authentication is not valid.' })

        const { id } = req.query
        const { title, price, description, location, type, images, rooms } = req.body

        if (!title || !price || !location || !description || !type || !rooms || !images)
            return res.status(400).json({ err: 'Please add all the fields.' })

        await Houses.findOneAndUpdate({ _id: id }, {
            title: title.toLowerCase(), price, description, location, type, images, rooms
        })

        res.json({ msg: 'Success! Updated a House' })
    } catch (err) {
        return res.status(500).json({ err: err.message })
    }
}

const deleteHouse = async (req, res) => {
    try {
        const result = await auth(req, res)

        if (result.role !== 'admin')
            return res.status(400).json({ err: 'Authentication is not valid.' })

        const { id } = req.query

        await Houses.findByIdAndDelete(id)
        res.json({ msg: 'Deleted a House.' })

    } catch (err) {
        return res.status(500).json({ err: err.message })
    }
}