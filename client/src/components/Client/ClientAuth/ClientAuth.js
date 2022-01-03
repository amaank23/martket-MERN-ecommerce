import React from 'react'
import PageTitleArea from '../header/PageTitleArea'
import './ClientAuth.css'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
import { connect } from 'react-redux'
import { loginCustomer, registerCustomer } from '../../../redux/actions/customer'
import { useHistory } from 'react-router-dom'
import { useEffect } from 'react'

const ClientAuth = ({ loginCustomer, registerCustomer, isAuthenticated }) => {

    const history = useHistory();

    function login(email, password, e){
        e.preventDefault();
        // console.log(history);
        loginCustomer(email, password, history);
    }
    function register(email, password, name, e){
        e.preventDefault();
        registerCustomer(name, email, password)

    }
    useEffect(() => {
        if(isAuthenticated){
            history.goBack();
        }
    }, [isAuthenticated])
    return (
        <section>
            <PageTitleArea title={"Login Page"} />
            <div className="container">
                <div className="form-container">
                    <LoginForm login={login} />
                    <RegisterForm register={register} />
                </div>
            </div>
        </section>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.clientAuth.isAuthenticated
})

export default connect(mapStateToProps, { loginCustomer, registerCustomer })(ClientAuth)
