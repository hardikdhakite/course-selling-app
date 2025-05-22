import { Router } from "express";
import { adminModel } from "../db.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

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