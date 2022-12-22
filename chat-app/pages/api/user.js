import connectDB from "../../server/controllers/connectDB";
import UserModel from "../../server/models/user.model";



async function getUser(req, res) {
  const userId = req.userId;
  try {
    const user = await UserModel.find({userId})
    return res.status(200).send(user);
  } catch (error) {
    return res.status(404).send({message: error.message});
  }
}


export default async function handler(req, res) {
    await connectDB()
    authMiddleware(getUser)(req, res);
    
    if (req.method === "GET") {
      return authMiddleware(getUser)(req, res);
    }
    if (req.method === "POST") {
      return authMiddleware(getUser)(req, res);
    }


    const users = await UserModel.find()
  res.status(200).send(users);
}
