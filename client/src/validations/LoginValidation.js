import * as yup from "yup";

export const LoginValidation = yup.object().shape({
    email: yup.string()
        .required("Email is required")
        .matches(
            /^[a-zA-Z0-9._%+-]+@(gmail|yahoo|outlook|hotmail)\.com$/,
            "Email must be a valid address (gmail, yahoo, outlook, or hotmail)"
        ),
    password: yup.string()
        .required("Password is required")
        .min(8, "Password must be min 8 characters")
});