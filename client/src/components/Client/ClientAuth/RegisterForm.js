import React from 'react'
import { useState } from 'react';

const RegisterForm = ({ register }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <>
            <div className="register-form">
                        <h2>Register</h2>
                        <form action="">
                        <div className="form-group">
                                <label htmlFor="">Name</label>
                                <input type="text" name="" value={name} onChange={(e) => setName(e.target.value)} id="" placeholder='Full Name' className='form-control' />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Email</label>
                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} name="" id="" placeholder='Valid Email' className='form-control' />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Password</label>
                                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} name="" id="" placeholder='Valid Password' className='form-control' />
                            </div>
                            <button className='form-control' onClick={(e) => {
                                register(email, password, name, e)
                                setEmail('');
                                setPassword('');
                                setName('');
                                }}>Register</button>
                        </form>
                    </div>
        </>
    )
}

export default RegisterForm
