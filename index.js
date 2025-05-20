import express from "express";
import dotenv from "dotenv"
import mongoose from "mongoose";
import { userRouter } from "./routes/user.js";
import { courseRouter } from "./routes/course.js";
import { adminRouter } from "./routes/admin.js";

dotenv.config();
const DATABASE_URL = process.env.DATABASE_URL;

const app = express();
app.use(express.json())

app.use("/api/v1/user", userRouter);
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/course", courseRouter);

async function main() {
    await mongoose.connect(DATABASE_URL);
    app.listen(3000);
    console.log("listening on port 3000");
}

main();