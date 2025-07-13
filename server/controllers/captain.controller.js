import { validationResult } from "express-validator";
import { Captain } from "../models/captain.model.js";
import { createCaptain } from "../services/captain.service.js";


export const registerCaptain = async(req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }
    const { fullname, email, password, vehicle} = req.body;
    
    const captainAlreadyExists = await Captain.findOne({email});
    if(captainAlreadyExists ){
        return res.status(400).json({message: "Captain already exists"});
    }

    const hashedPassword = await Captain.hashPassword(password);

    const captain = await createCaptain({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashedPassword,
        color: vehicle.color,
        plate: vehicle.plate,
        capacity: vehicle.capacity,
        vehicletype: vehicle.vehicletype
    })
    console.log("captain",captain);
    const token = captain.generateAuthToken();

    res.status(201).json({token, captain});
}