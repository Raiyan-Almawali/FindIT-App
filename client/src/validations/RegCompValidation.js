import * as yup from "yup";

export const RegCompValidation = yup.object().shape({
    companyName: yup
        .string()
        .required('Company name is required'),
    companyEmail: yup
        .string()
        .matches(
            /^[a-zA-Z0-9._%+-]+@(gmail|yahoo|outlook|hotmail)\.com$/,
            "Email must be a valid address (gmail, yahoo, outlook, or hotmail)"
        )
        .required('Company email is required'),
    contactNumber: yup
        .string()
        .matches(/^[79]\d{7}$/, 'Phone number must start with 9 or 7 and be 8 digits')
        .required('Phone number is required'),
    location: yup
        .string()
        .required('Location is required'),
    password: yup
        .string()
        .min(8, 'Password must be at least 8 characters')
        .required('Password is required'),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password')], 'Passwords must match')
        .required('Confirm Password is required'),
});