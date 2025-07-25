import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"


const userSchema = mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      required: true,
      minlength: [3, "First name must be atleast 3 characters"],
    },
    lastname: {
      type: String,
      minlength: [3, "First name must be atleast 3 characters"],
    },
  },
  email: {
    type: String,
    unique: true,
    required: true,
    minlength: [5, "Email must be atleast 5 letters"],
  },
  password: {
    type: String,
    required: true,
    select: false,      
  },
  socketid: {
    type: String,
  },
});

userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {expiresIn: 15 * 24 * 60 * 60 * 1000});
    return token;
}

userSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password, this.password);
}

userSchema.statics.hashPassword = async function(password) {
    return await bcrypt.hash(password, 10);
}

export const  User = mongoose.model("user", userSchema);