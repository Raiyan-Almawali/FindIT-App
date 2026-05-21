
import mongoose from "mongoose";

const CompanySchema=mongoose.Schema({
    compemail:{type:String,required:true,unique:true},
    cpassword:{type:String,required:true},
    companyname:{type:String,required:true},
    cphone:{type:Number,required:true},
    complocation:{type:String,required:true},
}

);

const CompanyModel=mongoose.model("CompanyTbl",CompanySchema,"CompanyTbl");
export default CompanyModel;


