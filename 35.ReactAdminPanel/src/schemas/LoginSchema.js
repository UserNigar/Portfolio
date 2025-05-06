import * as yup from "yup";

export let loginschema = yup.object().shape({
    username: yup
        .string()
        .required()
        .lowercase()
        .trim(),
    password: yup
        .string()
        .required(),
})