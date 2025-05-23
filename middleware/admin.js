import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

function adminMiddleware(req, res, next) {
    const token = req.headers.token;
    const decoded = jwt.verify(token, process.env.JWT_SECRET_ADMIN);

    if (decoded) {
        req.adminId = decoded.id;
        next();
    }
    else {
        res.status(403).json({
            message: "You are not signed in"
        })
    }
}

export { adminMiddleware }