import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    jobs: [],
    status: "idle",
    isLoading: false,
    isSuccess: false,
    isError: false
}



export const getJobs = createAsyncThunk("job/getJobs", async () => {
    try {
        const response = await axios.get("http://localhost:3002/getJobs");
        return response.data.jobs;
    } catch (error) {
        console.log("Server Error.." + error);
    }
});

export const getCompanyJobs = createAsyncThunk("job/getCompanyJobs", async (compemail) => {
    try {
        const response = await axios.get(`http://localhost:3002/getCompanyJobs?compemail=${compemail}`);
        return response.data.jobs;
    } catch (error) {
        console.log("Error: " + error);
    }
});



export const deleteJob = createAsyncThunk(
  "job/deleteJob",
  async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:3002/deleteJob/${id}`
      );
      return response.data;
    }
    catch (error) {
      console.log("Server Error.." + error);
    }
 }
);


export const updateJob = createAsyncThunk(
  "job/updateJob",
  async (jobData) => {

    try {
      const response = await axios.put(
        "http://localhost:3002/updateJob",
        jobData
      );
      return response.data;
    }
    catch (error) {
      console.log("Server Error.." + error);

    }
  }
);

export const JobSlice = createSlice({
    name: "job",
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(getJobs.pending, (state) => { 
            state.isLoading = true; 
        })
        .addCase(getJobs.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.status = "loaded";
            state.jobs = action.payload;
        })
        .addCase(getJobs.rejected, (state) => {
             state.isLoading = false; 
             state.isError = true; 
             state.status = "rejected";
        })
        .addCase(getCompanyJobs.fulfilled, (state, action) => {
            state.isLoading = false;
            state.jobs = action.payload;
        })
          .addCase(deleteJob.fulfilled, (state, action) => {
    state.jobs = state.jobs.filter(
        (job) => job._id !== action.payload
    );
})

.addCase(updateJob.fulfilled, (state, action) => {
    state.jobs = state.jobs.map((job) =>
        job._id === action.payload._id
            ? action.payload
            : job
    );
})
    }
});

export default JobSlice.reducer;