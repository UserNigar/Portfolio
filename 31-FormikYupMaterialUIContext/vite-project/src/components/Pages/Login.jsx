import React, { useContext } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Box, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema: Yup.object({
      email: Yup.string().email('Email düzgün deyil').required('Zəruridir'),
      password: Yup.string().required('Zəruridir'),
    }),
    onSubmit: (values) => {
      login(values);
      navigate('/');
    },
  });

  return (
    <Box component="form" onSubmit={formik.handleSubmit} sx={{ m: 2 }}>
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
      <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
        Daxil ol
      </Button>
    </Box>
  );
};

export default Login;
