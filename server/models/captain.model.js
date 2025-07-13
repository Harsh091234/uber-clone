import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";


const captainSchema = mongoose.Schema({
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

  vehicle: {
    color: {
      type: String,
      required: true,
      minlength: [3, "Color must be atleast 3 letter long"],
    },

    plate: {
      type: String,
      required: true,
      minlength: [3, "Color must be atleast 3 letter long"],
    },

    capacity: {
      type: Number,
      required: true,
      min: [1, "Capacity must be atleast 1"],
    },

    vehicletype: {
      type: String,
      required: true,
      enum: ["car", "bike", "auto"],
    },
  },

  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "inactive",
  },

  location: {
    lat: {
      type: Number,
    },

    lng: {
      type: Number,
    },
  },
});

captainSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {expiresIn: 15 * 24 * 60 * 60 * 1000});
    return token;
}

captainSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password, this.password);
}

captainSchema.statics.hashPassword = async function(password) {
    return await bcrypt.hash(password, 10);
}

export const Captain = mongoose.model("captain", captainSchema);
