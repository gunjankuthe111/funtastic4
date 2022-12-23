import connectDB from "../../server/controllers/connectDB"
import UserModel from "../../server/models/user.model"

export default async function handler(req, res) {
    await connectDB()
    const {query} = req.query

    if(query){
        const users = await UserModel.find({name:{$regex:query}})
        res.send(users)
    }
    res.json("Send the query")
  }