import connectToDB from "../../../utils/connectToDb";
import bcrypt from 'bcrypt'
import Users from '../../../models/userModel'
import { createAccessToken, createRefreshToken } from "../../../utils/generateToken";
connectToDB()

export default async (req, res) => {
    switch (req.method) {
        case "GET":
            await create(req, res)
            break;


    }
}


const create = async (req, res) => {
    res.send("hello world")
}