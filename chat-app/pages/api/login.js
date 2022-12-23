const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt")
import connectDB from "../../server/controllers/connectDB";
import UserModel from "../../server/models/user.model";



export default async function handler(req, res) {
    await connectDB()
    // return res.send("okay")
    if (req.method === "POST") {
        const { email, password } = req.body;
        try {
            const user = await UserModel.findOne({ email });
            console.log(user)
            if (user) {
                const hashed_password = user.password;
                // Load hash from your password DB.
                bcrypt.compare(password, hashed_password, function (err, result) {
                    result == true
                    if (result) {
                        const token = jwt.sign(
                            { id: user._id, name: user.name, email: user.email, profile: user.profile },
                            "hasssstop",
                            {
                                expiresIn: "1 day",
                            }
                        );
                        const refreshToken = jwt.sign(
                            { id: user._id, name: user.name, email: user.email, profile: user.profile },
                            "refreshhass",
                            { expiresIn: "7 days" }
                        );

                        return res
                            .status(200)
                            .send({ message: "login successfull", token, refreshToken });
                    }
                    else {
                        return res.status(401).send("Login failed");
                    }
                });

            }
            else {
                return res.status(404).send("User not found");
            }

        } catch (error) {
            return res.status(400).send("Invalid credentials");
        }

    }




}
