import express from "express";
import {body} from "express-validator"
import { registerUser } from "../controllers/user.controller.js";

const router = express.Router();

router.post("/register", [
    body("email").isEmail().withMessage("Invalid email"),
    body("password").isLength({min: 6}).withMessage("Password must be 6 letters"),
    body("fullname.firstname").isLength({min:3}).withMessage("First name must 3 letters"),
], registerUser);


export default router;