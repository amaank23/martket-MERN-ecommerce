import React from 'react'

const LoginForm = () => {
    return (
        <div className="login-form">
                        <h2>Login</h2>
                        <form action="">
                            <div className="form-group">
                                <label htmlFor="">Email</label>
                                <input type="email" className='form-control' name="" id="" placeholder='Email' />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Password</label>
                                <input type="password" className='form-control' name="" id="" placeholder='Password' />
                            </div>
                            <button className='form-control'>Login</button>
                        </form>
                    </div>
    )
}

export default LoginForm
