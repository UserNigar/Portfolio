import React, { useContext } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';

const Register = () => {
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: '',
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Ad zəruridir"),
      username: Yup.string().required("İstifadəçi adı zəruridir"),
      email: Yup.string().email("Düzgün email daxil edin").required("Email zəruridir"),
      password: Yup.string().min(6, "Minimum 6 simvol").required("Şifrə zəruridir"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], "Şifrələr uyğun gəlmir")
        .required("Təkrar şifrə zəruridir"),
    }),
    onSubmit: (values) => {
      const { confirmPassword, ...userData } = values;
      register(userData);
      navigate("/");
    },
  });

  return (
    <Box component="form" onSubmit={formik.handleSubmit} sx={{ m: 2 }}>
      <TextField
        fullWidth label="Ad" name="name" sx={{ mt: 2 }}
        value={formik.values.name} onChange={formik.handleChange}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
      />
      <TextField
        fullWidth label="İstifadəçi adı" name="username" sx={{ mt: 2 }}
        value={formik.values.username} onChange={formik.handleChange}
        error={formik.touched.username && Boolean(formik.errors.username)}
        helperText={formik.touched.username && formik.errors.username}
      />
      <TextField
        fullWidth label="Email" name="email" sx={{ mt: 2 }}
        value={formik.values.email} onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      <TextField
        fullWidth label="Şifrə" name="password" type="password" sx={{ mt: 2 }}
        value={formik.values.password} onChange={formik.handleChange}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
      />
      <TextField
        fullWidth label="Şifrəni təkrar daxil edin" name="confirmPassword" type="password" sx={{ mt: 2 }}
        value={formik.values.confirmPassword} onChange={formik.handleChange}
        error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
        helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
      />
      <Button type="submit" variant="contained" color="primary" sx={{ mt: 3 }}>
        Qeydiyyatdan keç
      </Button>
    </Box>
  );
};

export default Register;
