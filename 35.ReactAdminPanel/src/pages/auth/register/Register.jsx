import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import './Register.css'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { registerschema } from '../../../schemas/RegisterSchema';

const Register = () => {
    const navigate = useNavigate();
    const {values, handleChange, handleSubmit, errors, resetForm} = useFormik({
        initialValues: {
            name: "",
            surname: "",
            username: "",
            email: "",
            password: "",
            confirmpassword: "",
            isLogined:false,
        },

        onSubmit: async (values) => {

            let {data} = await axios.get("http://localhost:3000/users")

            let existUser = data.find((user) => user.username === username || user.email === email)

            if (!existUser) {
                await axios.post("http://localhost:3000/users", values)
            resetForm()
            toast.success('Registered successfully!');
            setTimeout(() => {
                navigate('/login');
            }, 2500);
            } else {
                toast.error('User already exist!')
            }
        },
        validationSchema: registerschema
    })

    const {name, surname, username, email, password, confirmpassword} = values
  return (
    <div className="register-container">
        <form className='register-form' action="" onSubmit={handleSubmit}>
            <h2>Register</h2>
            <div>
                <div className="label-container">
                    <label htmlFor="name">Name</label>
                    {errors.name && <p className="error">{errors.name}</p>}
                </div>
                <input type="text" id='name' value={name} onChange={handleChange}/>
            </div>
            <div>
                <div className="label-container">
                    <label htmlFor="surname">Surname</label>
                    {errors.surname && <p className="error">{errors.surname}</p>}
                </div>
                <input type="text" id='surname' value={surname} onChange={handleChange}/>
            </div>
            <div>
                <div className="label-container">
                    <label htmlFor="username">Username</label>
                    {errors.username && <p className="error">{errors.username}</p>}
                </div>
                <input type="text" id='username' value={username} onChange={handleChange}/>
            </div>
            <div>
                <div className="label-container">
                    <label htmlFor="email">E-mail</label>
                    {errors.email && <p className="error">{errors.email}</p>}
                </div>
                <input type="email" id='email' value={email} onChange={handleChange}/>
            </div>
            <div>
                <div className="label-container">
                    <label htmlFor="password">Password</label>
                    {errors.password && <p className="error">{errors.password}</p>}
                </div>
                <input type="password" id='password' value={password} onChange={handleChange}/>
            </div>
            <div>
                <div className="label-container">
                    <label htmlFor="confirmpassword">Confirm Password</label>
                    {errors.confirmpassword && <p className="error">{errors.confirmpassword}</p>}
                </div>
                <input type="password" id='confirmpassword' value={confirmpassword} onChange={handleChange}/>
            </div>     
            <p style={{marginBottom: "5px"}}>
                Already have an account? <Link style={{color: "blue"}} to={'/login'}>Sign In</Link>  
            </p>      
            <button className='register-btn' type='submit'>Sign Up</button> 
        </form>
    </div>
  )
}

export default Register