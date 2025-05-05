import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { TextField, Button } from '@mui/material';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const Register = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      isLogined: false,
    },
    validationSchema: Yup.object({
      username: Yup.string().required('Username is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .required('Password is required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm password is required'),
    }),
    onSubmit: async (values) => {
        const { data } = await axios.get('http://localhost:3000/users');
        const existUser = data.find(
          (user) => user.username === values.username || user.email === values.email
        );

        if (!existUser) {
          await axios.post('http://localhost:3000/users', values);
          toast.success('Registration Successful! Redirecting to login...');
          setTimeout(() => {
            navigate('/login');
          }, 3000);
        } else {
          toast.error('User already exists');
        }
      
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        label="Username"
        fullWidth
        margin="normal"
        {...formik.getFieldProps('username')}
        error={formik.touched.username && Boolean(formik.errors.username)}
        helperText={formik.touched.username && formik.errors.username}
      />
      <TextField
        label="Email"
        fullWidth
        margin="normal"
        {...formik.getFieldProps('email')}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      <TextField
        label="Password"
        type="password"
        fullWidth
        margin="normal"
        {...formik.getFieldProps('password')}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
      />
      <TextField
        label="Confirm Password"
        type="password"
        fullWidth
        margin="normal"
        {...formik.getFieldProps('confirmPassword')}
        error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
        helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
      />
      <Button color="primary" variant="contained" fullWidth type="submit">
        Register
      </Button>
    </form>
  );
};

export default Register;
