import { Router } from "express";

const courseRouter = Router();

courseRouter.post("/purchases", function (req, res) {
    res.json({
        message: "purchasing a courses"
    })
})

courseRouter.get("/preview", function (req, res) {
    res.json({
        message: "all courses endpoint"
    })
})

export { courseRouter }