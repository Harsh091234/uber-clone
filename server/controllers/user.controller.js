import { validationResult } from "express-validator";
import { createUser } from "../services/user.service.js";
import { User } from "../models/user.model.js";
import { BlacklistToken } from "../models/blacklistToken.model.js";


export const registerUser = async(req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    const {fullname, email, password} = req.body;
    const hashedPassword = await User.hashPassword(password);

    const user = await createUser({firstname: fullname.firstname, lastname: fullname.lastname, email, password: hashedPassword});

    const token = user.generateAuthToken();

    res.status(201).json({token, user});



};

export const loginUser = async(req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }

    const {email, password} = req.body;
    const user = await User.findOne({email}).select("+password");
    if(!user){
        return res.status(401).json({message: "invalid email or password"});
    }
    const isMatch = await user.comparePassword(password);
    if(!isMatch){
        return res.status(401).json({ message: "invalid email or password" });
    }
    const token = user.generateAuthToken();
    res.cookie("token", token);

    res.status(200).json({token, user})



}
 
export const getUserProfile = (req, res) => {
    res.json({user: req.user});
}

export const logoutUser = async(req, res) => {
    res.clearCookie("token");
    const token = req.cookies.token || req.headers.authorization.split(" ")[1];
    await BlacklistToken.create({token});
    res.status(200).json({message: "Logged out"});
}