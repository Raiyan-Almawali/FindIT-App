    import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
    import axios from 'axios';

    const initialState = {
        company: {},
        message: "",
        isLoading: false,
        isSuccess: false,
        isError: false
    }

    export const addCompany = createAsyncThunk("company/addCompany", async (companyData) => {
        try {
            const response = await axios.post("http://localhost:3002/companyAdd", companyData);
            return response.data.message;
           
        } catch (error) {
            console.log("Server Error.." + error);
        }
    });

    export const loginProvider = createAsyncThunk("company/loginProvider", async (companyData) => {
        try {
            const response = await axios.post("http://localhost:3002/companyLogin", companyData);
            return response.data;
        } catch (error) {
            console.log("Server Error.." + error);
        }
    });

    export const changePassword = createAsyncThunk("company/changePassword", async (data, { rejectWithValue }) => {
    try {
        const response = await axios.put("http://localhost:3002/changeCompanyPassword", data);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data || { message: "Server Error" });
    }
});

    export const CompanySlice = createSlice({
        name: "company",
        initialState,
        extraReducers: (builder) => {
            builder
            .addCase(addCompany.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(addCompany.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.message = action.payload;
            })
            .addCase(addCompany.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
            })
            .addCase(loginProvider.pending,(state)=>{
                state.isLoading=true;
            })
            .addCase(loginProvider.fulfilled,(state,action)=>{
                state.isLoading=false;
                state.isSuccess=true;
                state.company=action.payload.company;
                state.message=action.payload.message;
            })
            .addCase(loginProvider.rejected,(state)=>{
                state.isLoading=false;
                state.isError=true;
            })
            .addCase(changePassword.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(changePassword.fulfilled, (state, action) => {
            state.isLoading = false;
            state.message = action.payload.message;
        })
        .addCase(changePassword.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload?.message || "Error";
        })

        }
    });

    export default CompanySlice.reducer;