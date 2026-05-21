import mongoose from "mongoose";

const UserSchema=mongoose.Schema({
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    fullname:{type:String,required:true},
    phonenumber:{type:Number,required:true},
      
});

const UserModel=mongoose.model("UsersTbl",UserSchema,"UsersTbl");
export default UserModel;

//email,password,fullname,phonenumber