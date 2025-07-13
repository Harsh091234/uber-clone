import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import userRoutes from "./routes/user.routes.js"
import cookieParser from "cookie-parser";
import captainRoutes from "./routes/captain.routes.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(cors());


app.use("/api/users", userRoutes);
app.use("/api/captains", captainRoutes);

app.get("/", (req, res) => {
    res.send("hello world");
} )

export default app;