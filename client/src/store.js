import { configureStore } from "@reduxjs/toolkit";
import UserReducer from './Features/UserSlice';
import CompanyReducer from './Features/CompSlice';
import JobReducer from './Features/JobsSlice';

export const store = configureStore({
    reducer: {
        user: UserReducer,
        company: CompanyReducer,
        job: JobReducer
    }
});