import express from "express";
import {body} from "express-validator";
import { registerCaptain } from "../controllers/captain.controller.js";

const router = express.Router();

router.post(
  "/register",
  [
    body("email").isEmail().withMessage("Invalid email"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be 6 letters"),
    body("fullname.firstname")
      .isLength({ min: 3 })
      .withMessage("First name must 3 letters"),
    body("vehicle.color")
      .isLength({ min: 3 })
      .withMessage("Color must 3 letters"),
    body("vehicle.plate")
      .isLength({ min: 3 })
      .withMessage("Plate must be atleast 3 characters"),
    body("vehicle.capacity")
      .isInt({ min: 1 })
      .withMessage("Capacity must be atleast 1 "),
    body("vehicle.vehicletype")
      .isIn(["car", "bike", "auto"])
      .withMessage("Invalid vehicle type"),
  ],
  registerCaptain
);



export default router;