const express = require("express");
const { auth } = require("../middleware/auth.middleware");
const PostModel = require("../models/post.model");

const postRouter = express.Router();

postRouter.post("/create", auth, async (req, res) => {
    req.body.user_id=req.body.user.userID
    req.body.user_name=req.body.user.username
    try {
        let post = new PostModel(req.body)
        await post.save()
        res.status(200).send({ "data": post })
    } catch (error) {
        res.status(500).send({ "error": error })
    }
})

postRouter.get("/", auth, async(req,res)=>{
    try {
        const data = await PostModel.find()
        res.status(200).send({ "data": data })
    } catch (error) {
        res.status(500).send({ "error": error })
    }
})

module.exports = postRouter