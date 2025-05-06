import * as yup from "yup";

export let registerschema = yup.object().shape({
    name: yup
        .string()
        .min(3)
        .required(),
    surname: yup
        .string()
        .min(5)
        .required(),
    username: yup
        .string()
        .required()
        .lowercase()
        .trim(),
    email: yup
        .string()
        .email()
        .required(),
    password: yup
        .string()
        .required()
        .matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One number."
        ),
    confirmpassword: yup
        .string()
        .required()
        .oneOf([yup.ref("password"), null], "Passwords must match"),
})