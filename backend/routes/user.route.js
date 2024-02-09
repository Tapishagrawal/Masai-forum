require("dotenv").config()
const express = require("express");
const UserModel = require("../models/user.model");
const cloudinary = require("cloudinary").v2;
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const userRouter = express.Router();

cloudinary.config({
    cloud_name: 'dtbkacycl',
    api_key: '862145395919799',
    api_secret: 'wNt_AWbvTWJFN09GDlDVKvWmHZo'
});

userRouter.post("/register", async (req, res) => {
    const { username, email, password } = req.body;
    const file = req.files.avatar;
    try {
        const user = await UserModel.findOne({ email });
        if (user) {
            return res.status(409).json({
                status: "fail",
                message: `This email has already been registered.`,
            });
        }
        cloudinary.uploader.upload(file.tempFilePath, async (err, result) => {
            if (result) {
                const hash = await bcrypt.hash(password, 5);
                const newUser = new UserModel({
                    username,
                    email,
                    password: hash,
                    avatar: result.url,
                });
                await newUser.save()
                res.status(201).json({
                    status: "success",
                    message: "The new user has been registered",
                });
            }
        })
    } catch (error) {
        res.status(404).json({ "error": error })
    }
})



userRouter.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        if (!email || !password) {
            return res.status(400).json({
                status: "fail",
                message: "Please provide both email and password.",
            });
        }

        const user = await UserModel.findOne({ email });
        console.log(user)
        if (!user) {
            return res.status(400).json({
                status: "fail",
                message: "User not registered",
            });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({
                status: "fail",
                message: "Password is wrong",
            });
        }

        const token = jwt.sign({ username: user.username, userID: user._id }, process.env.LOGIN_JWT_SECRET_KEY, { expiresIn: "7d", });
        res.status(200).json({
            status: "success",
            message: "Login successfully!",
            data: {user, token},
        });
    } catch (error) {
        console.log(error)
        res.status(404).json({ "error": error })
    }
})

module.exports = userRouter