import React from 'react'
import PageTitleArea from '../header/PageTitleArea'
import './ClientAuth.css'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'

const ClientAuth = () => {
    return (
        <section>
            <PageTitleArea title={"Login Page"} />
            <div className="container">
                <div className="form-container">
                    <LoginForm />
                    <RegisterForm />
                </div>
            </div>
        </section>
    )
}

export default ClientAuth
