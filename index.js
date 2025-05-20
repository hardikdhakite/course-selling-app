
import express from "express";

const app = express();
app.use(express.json())

app.post("/user/signup", function (req, res) {
    res.json({
        message: "signup endpoint"
    })
})

app.post("/user/signin", function (req, res) {
    res.json({
        message: "signin endpoint"
    })
})

app.get("/user/purchases", function (req, res) {
    res.json({
        message: "my courses"
    })
})

app.post("/user/purchases", function (req, res) {
    res.json({
        message: "purchasing a courses"
    })
})

app.get("/courses", function (req, res) {
    res.json({
        message: "all courses endpoint"
    })
})

app.listen(3000);