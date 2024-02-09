const express = require("express");
const connection = require("./connection");
require("dotenv").config();
const cors = require("cors");
const userRouter = require("./routes/user.route");
const fileUpload = require("express-fileupload");
const postRouter = require("./routes/post.route");

const app = express();

app.use(fileUpload({
    useTempFiles:true
}))
app.use(cors());
app.use(express.json());
app.use("/user", userRouter)
app.use("/post", postRouter)

app.listen(process.env.port,async()=>{
    try {
        await connection
        console.log(`http://localhost:${process.env.port}`)
    } catch (error) {
        console.log(error)
    }
})