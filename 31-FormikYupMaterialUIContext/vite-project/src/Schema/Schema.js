import * as Yup from 'yup';

export const registerSchema = Yup.object({
  email: Yup.string().email("Yanlış email").required("Email tələb olunur"),
  password: Yup.string().min(6, "Minimum 6 simvol").required("Şifrə tələb olunur")
});
