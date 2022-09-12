const User = require("../models/userSchema")
const bcrypt =require("bcrypt")
const {validate} =require("../config/validator")


// adding a user
const addUser = async (req, res) => {
    const { username, email, password } = req.body;
    const vaild = await validate({ username, email, password});
    if (vaild) {

        const hashedPassword =await bcrypt.hash(vaild.password, 8)
        const savedUser = await User.create({
            username,
            email,
            password,hashedPassword,
        });

        res.status(201).json({
            success: true,
            message: "user created",
            savedUser,
        });
    } else {
        res.status(400).json({
            error: true,
            message: "Invaild data",
        });
    }
 };

 module.exports={addUser}

