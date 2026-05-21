import mongoose from "mongoose";

const JobSchema = new mongoose.Schema({
    compemail: {type: String,required: true},
    jobTitle: {type: String,required: true},   
    jobDescription: {type: String,required: true},
    responsibilities: {type: String,required: true},
    requiredSkills: {type: String,required: true},
    budget: {type: Number,required: true},
    location: {type: String,required: true},
    duration: {type: String,required: true},
    deadline: {type: Date,required: true},
    lat: { type: Number },
    lng: { type: Number }
},
{timestamps:{createdAt:true,updatedAt:false}}
);

const JobModel = mongoose.model("JobsTbl", JobSchema, "JobsTbl");
export default JobModel;

//companyemail,jobTitle,jobDescription,responsibilities,requiredSkills,budget,location,duration,deadline,lat,lng