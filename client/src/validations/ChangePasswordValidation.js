import * as yup from "yup";

export const ChangePasswordValidation = yup.object().shape({
    oldPassword: yup
        .string()
        .required("Current password is required"),

    confirmOldPassword: yup
        .string()
        .oneOf([yup.ref("oldPassword")], "Current passwords do not match")
        .required("Please confirm your current password"),

    newPassword: yup
        .string()
        .min(8, "New password must be at least 8 characters")
        .required("New password is required"),

    confirmNewPassword: yup
        .string()
        .oneOf([yup.ref("newPassword")], "New passwords do not match")
        .required("Please confirm your new password"),
});