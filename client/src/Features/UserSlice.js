import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
 
const initialState={
   user:{},
   message:"",
   isLoading:false,
   isSuccess:false,
   isError:false
}
 
export const addPerson=createAsyncThunk("person/addPerson",async(userData)=>{
    try{
        const response=await axios.post("http://localhost:3002/personRegister",userData);
        return response.data.message;
    }
    catch(error){
        console.log("Server Error.."+error)
    }
});

export const loginUser=createAsyncThunk("person/loginUser",async(userData)=>{
    try{
        const response=await axios.post("http://localhost:3002/personLogin",userData);
        return response.data;
    }
    catch(error){
        console.log("Server Error.."+error)
    }
});

export const UserSlice=createSlice({
    name:"user",
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(addPerson.pending,(state)=>{
            state.isLoading=true;
        })
        .addCase(addPerson.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isSuccess=true;
            state.message=action.payload;
        })
        .addCase(addPerson.rejected,(state)=>{
            state.isLoading=false;
            state.isError=true;
        })
        .addCase(loginUser.pending,(state)=>{
            state.isLoading=true;
        })
        .addCase(loginUser.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isSuccess=true;
            state.user=action.payload.user;
            state.message=action.payload.message;
        })
        .addCase(loginUser.rejected,(state)=>{
            state.isLoading=false;
            state.isError=true;
        })
    } 
});
 
export default UserSlice.reducer;
 