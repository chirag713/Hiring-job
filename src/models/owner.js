import mongoose, { Schema } from "mongoose";

const ownerSchema= new Schema({
    name:String,
    email:{
        type:String,
        required:[true , "Email is required"],
        unique:true,
        dropDups:true,
    },

    password:{
        type:String,
        required:[true , "Password is required"],
    },
    profileurl:String,
    address:{
        street:String,
        city:String,
        state:String,
        country:String,
        pincode:Number
    }
})

export const Owner= mongoose.models.owners || mongoose.model("owners" , ownerSchema);

