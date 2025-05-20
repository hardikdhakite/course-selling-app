
import express from "express";
import { createUserRoute } from "./routes/user";
import { createCourseRoute } from "./routes/course";
import { userRouter } from "./routes/user";
import { courseRouter } from "./routes/course";

const app = express();
app.use(express.json())

app.use("/user", userRouter);
app.use("/course", courseRouter);

createUserRoute(app);
createCourseRoute(app);

app.listen(3000);