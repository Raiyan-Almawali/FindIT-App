import * as yup from "yup";

export const PostJobValidation = yup.object().shape({
    jobTitle: yup
        .string()
        .required("Job title is required")
        .min(3, "Job title must be at least 3 characters")
        .max(100, "Job title must not exceed 100 characters"),

    jobDescription: yup
        .string()
        .required("Job description is required")
        .min(20, "Job description must be at least 20 characters")
        .max(1000, "Job description must not exceed 1000 characters"),

    responsibilities: yup
        .string()
        .required("Responsibilities are required")
        .min(10, "Responsibilities must be at least 10 characters")
        .max(500, "Responsibilities must not exceed 500 characters"),

    requiredSkills: yup
        .string()
        .required("Required skills are required")
        .min(5, "Required skills must be at least 5 characters")
        .max(300, "Required skills must not exceed 300 characters"),

    budget: yup
        .number()
        .typeError("Budget must be a number")
        .required("Budget is required")
        .min(1, "Budget must be greater than 0")
        .max(100000, "Budget must not exceed 100,000 OMR"),

    location: yup
        .string()
        .required("Location is required")
        .min(3, "Location must be at least 3 characters")
        .max(100, "Location must not exceed 100 characters"),

    duration: yup
        .string()
        .required("Duration is required")
        .min(2, "Duration must be at least 2 characters")
        .max(50, "Duration must not exceed 50 characters"),

    deadline: yup
        .date()
        .typeError("Deadline must be a valid date")
        .required("Deadline is required")
        .min(new Date(), "Deadline must be a future date"),
});