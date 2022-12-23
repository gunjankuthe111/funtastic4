const bcrypt = require("bcrypt");
import connectDB from "../../server/controllers/connectDB";
import UserModel from "../../server/models/user.model";

const saltRounds = 5;
// await connectDB()


export default async function handler(req, res) {
    await connectDB()
    // return res.send({"ID": 123})

    if (req.method === "POST") {
        const { name, email, password, profile } = req.body;
        try {
            bcrypt.hash(password, saltRounds, async function (err, hash) {
                // Store hash in your password DB.
                const user = new UserModel({ name, email, password: hash, profile });
                await user.save();
                return res.send("Sign up successfull");
            });
        } catch (error) {
            return res.status(401).send("Something went wrong, please try again later");
        }
    
    }


}
