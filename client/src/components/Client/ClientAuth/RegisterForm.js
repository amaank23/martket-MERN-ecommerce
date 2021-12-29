import React from 'react'

const RegisterForm = () => {
    return (
        <div>
            <div className="register-form">
                        <h2>Register</h2>
                        <form action="">
                        <div className="form-group">
                                <label htmlFor="">Name</label>
                                <input type="text" name="" id="" placeholder='Full Name' className='form-control' />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Email</label>
                                <input type="email" name="" id="" placeholder='Valid Email' className='form-control' />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Password</label>
                                <input type="password" name="" id="" placeholder='Valid Password' className='form-control' />
                            </div>
                            <button className='form-control'>Register</button>
                        </form>
                    </div>
        </div>
    )
}

export default RegisterForm
