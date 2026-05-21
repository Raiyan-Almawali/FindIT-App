import * as yup from "yup";

export const RegPersValidation = yup.object().shape({
    fullName: yup
        .string()
        .required('Full name is required'),
    email: yup
        .string()
        .matches(
            /^[a-zA-Z0-9._%+-]+@(gmail|yahoo|outlook|hotmail)\.com$/,
            "Email must be a valid address (gmail, yahoo, outlook, or hotmail)"
        )
        .required('Email is required'),
    phone: yup
        .string()
        .matches(/^[79]\d{7}$/, 'Phone number must start with 9 or 7 and be 8 digits')
        .required('Phone number is required'),
    password: yup
        .string()
        .min(8, 'Password must be at least 8 characters')
        .required('Password is required'),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password')], 'Passwords must match')
        .required('Confirm Password is required'),
});