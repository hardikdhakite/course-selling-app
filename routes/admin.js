import { Router } from "express";
import { adminModel, courseModel } from "../db.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { adminMiddleware } from "../middleware/admin.js";

dotenv.config();

const adminRouter = Router();

adminRouter.post("/signup", async function (req, res) {
    const { email, password, firstName, lastName } = req.body;

    await adminModel.create({
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName
    })

    res.json({
        message: "signup succeeded"
    })
})

adminRouter.post("/signin", async function (req, res) {
    const { email, password } = req.body;

    const admin = await adminModel.findOne({
        email: email,
        password: password
    })

    if (admin) {
        const token = jwt.sign({
            id: admin._id
        }, process.env.JWT_SECRET_ADMIN);

        res.json({
            token: token
        })
    }
    else {
        res.status(403).json({
            message: "Incorrect Credentials"
        })
    }
})

adminRouter.post("/course", adminMiddleware, async function (req, res) {
    const adminId = req.userId;
    
    const { title, description, price, imageUrl } = req.body;

    const course = await courseModel.create({
        title: title,
        description: description,
        price: price,
        imageUrl: imageUrl,
        creatorId: adminId
    })

    res.json({
        message: "Course created",
        courseId: course._id
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