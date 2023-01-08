import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import './styles/login.css'


const Login = () => {

    const [isLogged, setIsLogged] = useState(false)

    const navigate = useNavigate()

    const { handleSubmit, register, reset } = useForm()

    const submit = data => {
        // console.log(data)
        const URL = 'https://e-commerce-api.academlo.tech/api/v1/users/login'
        axios.post(URL, data)
            .then(res => {
                console.log(res.data.data)
                localStorage.setItem('token', res.data.data.token)
                setIsLogged(true)
                navigate('/')
            })
            .catch(err => console.log(err))

        reset({
            email: "",
            password: ""
        })
    }


    useEffect(() => {
        const condition = localStorage.getItem('token') ? true : false
        setIsLogged(condition)
    }, [])

    console.log(isLogged)

    const handleLogout = () => {
        localStorage.removeItem('token')
        setIsLogged(false)
    }

    if (isLogged) {
        return (
            <div className='login'>
                <div className="login__container">
                    <div>
                        <img src='./img/userprofile.png' alt="" />
                    </div>
                    {/* <h4>{ }</h4> */}
                    <button onClick={handleLogout}>Logout</button>
                </div>
            </div>
        )
    }

    return (
        <div className='login'>
            <div className="login__container">
                <h3 className='login__main-title'>Welcome! Enter your email and password to continue</h3>
                <p className='login__sub-title'>You have to Log In to access to your cart</p>
                <div className='login__test'>
                    <p className='login__test-title'>Test data</p>
                    <div className="login__test-email">john@gmail.com</div>
                    <div className="login__test-pass">john1234</div>
                </div>
                <form className='login__form' onSubmit={handleSubmit(submit)}>
                    <div className='login__form-email'>
                        <label className='login__form-lbl' htmlFor="email">Email</label>
                        <input className='login__form-inp' type="text" id='email' {...register("email")} />
                    </div>
                    <div className='login__form-pass'>
                        <label className='login__form-lbl' htmlFor="password">Password</label>
                        <input className='login__form-inp' type="password" id='password' {...register("password")} />
                    </div>
                    <button className='login__form-login'>Login</button>
                </form>
            </div>

        </div>
    )
}

export default Login