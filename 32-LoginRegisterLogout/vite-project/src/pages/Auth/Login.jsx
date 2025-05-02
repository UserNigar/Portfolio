import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { TextField, Button } from '@mui/material';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const [isLogined, setIsLogined] = useState(false); 

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string().required('Username is required'),
      password: Yup.string().required('Password is required'),
    }),
    onSubmit: async (values) => {
        const {data}=await axios('http://localhost:3000/users')
        let existUser=data.find(
            (user)=>user.username==values.username && user.password==values.password

        )

        if (existUser) {
            await axios.put(`${'http://localhost:3000/users'}/${existUser.id}`,{...existUser, isLogined:true} );
          toast.success('Login Successful!');
          setTimeout(() => {
            navigate('/'); 
          }, 4000);
            
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
        label="Password"
        type="password"
        fullWidth
        margin="normal"
        {...formik.getFieldProps('password')}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
      />
      <Button color="primary" variant="contained" fullWidth type="submit">
        Login
      </Button>
    </form>
  );
};

export default Login;
