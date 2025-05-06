import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { loginschema } from '../../../../schemas/LoginSchema'

const Login = () => {
    const navigate = useNavigate();
    const {values, handleChange, handleSubmit, errors, resetForm} = useFormik({
        initialValues: {
            username: "",
            password: "",
        },

        onSubmit: async (values) => {

            const {data} = await axios("http://localhost:3000/users")

            let existUser = data.find((user) => user.username == username && user.password == password)

            if (existUser) {
                await axios.put(`http://localhost:3000/users/${existUser.id}`, {...existUser, isLogined:true})
                resetForm()
                toast.success('Logined successfully!');
                setTimeout(() => {
                    navigate('/');
                }, 2500);
            } else {
                toast.error('User not found!')
            }
        },
        validationSchema: loginschema
    })

    const { username, password } = values
  return (
    <div className="login-container">
        <form className='login-form' action="" onSubmit={handleSubmit}>
            <h2>Login</h2>
            <div>
                <div className="label-container">
                    <label htmlFor="username">Username</label>
                    {errors.username && <p className="error">{errors.username}</p>}
                </div>
                <input type="text" id='username' value={username} onChange={handleChange}/>
            </div>
            <div>
                <div className="label-container">
                    <label htmlFor="password">Password</label>
                    {errors.password && <p className="error">{errors.password}</p>}
                </div>
                <input type="password" id='password' value={password} onChange={handleChange}/>
            </div> 
            <p style={{marginBottom: "5px"}}>
                Don't have an account? <Link style={{color: "blue"}} to={'/register'}>Sign Up</Link>  
            </p>            
            <button className='login-btn' type='submit'>Sign In</button> 
        </form>
    </div>
  )
}

export default Login