const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
        name: { type: "String"  },
        email: { type: "String" },
        password: { type: "String" },
        profile: {
            type: "String",
            
            default:
                "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
        },
    },
    { timestaps: true }
);

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;