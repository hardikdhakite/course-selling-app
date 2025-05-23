import { Router } from "express";
import { userMiddleware } from "../middleware/user";
import { courseModel, purchaseModel } from "../db";

const courseRouter = Router();

courseRouter.post("/purchases", userMiddleware, async function (req, res) {

    const userId = req.userId;
    const courseId = req.body.courseId;

    await purchaseModel.create({
        userId,
        courseId
    })

    res.json({
        message: "You have successfully bought the course"
    })
})

courseRouter.get("/preview", async function (req, res) {
    const courses = await courseModel.find({});

    res.json({
        courses
    })
})

export { courseRouter }