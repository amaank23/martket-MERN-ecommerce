import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import ErrorMsg from '../../Error/ErrorMsg'

const LoginForm = ({ login }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const error = useSelector(state => state.clientAuth)
    return (
        <div className="login-form">
                        <h2>Login</h2>
                        <form action="">
                            <div className="form-group">
                                <label htmlFor="">Email</label>
                                <input type="email" className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} name="" id="" placeholder='Email' />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Password</label>
                                <input type="password" className='form-control' value={password} onChange={(e) => setPassword(e.target.value)} name="" id="" placeholder='Password' />
                            </div>
                            {error.error ? (<ErrorMsg>{error.error}</ErrorMsg>) : ''}
                            <button className='form-control' onClick={(e) => login(email, password, e)}>Login</button>
                        </form>
                    </div>
    )
}

export default LoginForm
