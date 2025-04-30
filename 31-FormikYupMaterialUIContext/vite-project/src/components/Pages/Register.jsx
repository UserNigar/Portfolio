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
    initialValues: { email: '', password: '' },
    validationSchema: Yup.object({
      email: Yup.string().email("Düzgün email daxil edin").required("Zəruridir"),
      password: Yup.string().min(6, "Minimum 6 simvol").required("Zəruridir"),
    }),
    onSubmit: (values) => {
      register(values);
      navigate("/");
    },
  });

  return (
    <Box component="form" onSubmit={formik.handleSubmit} sx={{ m: 2 }}>
      <TextField
        fullWidth label="Email" name="email"
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
      <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
        Qeydiyyatdan keç
      </Button>
    </Box>
  );
};

export default Register;
