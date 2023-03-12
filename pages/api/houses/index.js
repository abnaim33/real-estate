import connectToDB from '../../../utils/connectToDb'
import Houses from '../../../models/HouseModel'
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

// class APIfeatures {
//     constructor(query, queryString) {
//         this.query = query;
//         this.queryString = queryString;
//     }
//     filtering() {
//         const queryObj = { ...this.queryString }

//         const excludeFields = ['page', 'sort', 'limit']
//         excludeFields.forEach(el => delete (queryObj[el]))

//         if (queryObj.category !== 'all')
//             this.query.find({ category: queryObj.category })
//         if (queryObj.title !== 'all')
//             this.query.find({ title: { $regex: queryObj.title } })

//         this.query.find()
//         return this;
//     }

//     sorting() {
//         if (this.queryString.sort) {
//             const sortBy = this.queryString.sort.split(',').join('')
//             this.query = this.query.sort(sortBy)
//         } else {
//             this.query = this.query.sort('-createdAt')
//         }

//         return this;
//     }

//     paginating() {
//         const page = this.queryString.page * 1 || 1
//         const limit = this.queryString.limit * 1 || 6
//         const skip = (page - 1) * limit;
//         this.query = this.query.skip(skip).limit(limit)
//         return this;
//     }
// }

class ApiFeatures {
    constructor(query, queryStr) {
        this.query = query;
        this.queryStr = queryStr;
    }

    search() {
        const keyword = this.queryStr.keyword
            ? {
                name: {
                    $regex: this.queryStr.keyword,
                    $options: "i",
                },
            }
            : {};

        this.query = this.query.find({ ...keyword });
        return this;
    }

    filter() {
        const queryCopy = { ...this.queryStr };
        //   Removing some fields for category
        const removeFields = ["keyword", "page", "limit"];

        removeFields.forEach((key) => delete queryCopy[key]);

        // Filter For Price and Rating

        let queryStr = JSON.stringify(queryCopy);
        queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (key) => `$${key}`);

        this.query = this.query.find(JSON.parse(queryStr));

        return this;
    }

    pagination(resultPerPage) {
        const currentPage = Number(this.queryStr.page) || 1;

        const skip = resultPerPage * (currentPage - 1);

        this.query = this.query.limit(resultPerPage).skip(skip);

        return this;
    }
}

const getHouses = async (req, res) => {
    try {


        // const features = new ApiFeatures(Houses.find(), req.query)
        //     .filtering().sorting().paginating()

        // const Houses = await features.query
        const houses = await Houses.find()
        // console.log(Houses, 'from House')
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