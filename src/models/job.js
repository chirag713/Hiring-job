import mongoose, { Schema } from "mongoose";

const JobSchema= new Schema({
    companyid: {
        type:mongoose.ObjectId,
        required:true,
    },
    name:String,
    address:{
        street:String,
        city:String,
        state:String,
        country:String,
        pincode:Number
    },
    worktype:String,
    Timeperiod:Number,
    Salary:String,
    StartingDate:String ,
    Applyby:String,
    About:String,
    Skillsrequired:[String],
    Whocanapply:[String],
    Perks:[String],
    Addeddate:String,
    noofaplicant:Number,
})

export const Job= mongoose.models.jobs || mongoose.model("jobs" , JobSchema);