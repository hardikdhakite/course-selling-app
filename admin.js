
import { Router } from "express";

const adminRouter = Router();

adminRouter.post("/signup", function (req, res) {
    res.json({
        message: "signup endpoint"
    })
})

adminRouter.post("/signin", function (req, res) {
    res.json({
        message: "signin endpoint"
    })
})

adminRouter.post("/course", function (req, res) {
    res.json({
        message: "Add course"
    })
})

adminRouter.put("/course", function (req, res) {
    res.json({
        message: "Add course"
    })
})

adminRouter.get("/course/bulk", function (req, res) {
    res.json({
        message: "Add course"
    })
})

export { adminRouter }