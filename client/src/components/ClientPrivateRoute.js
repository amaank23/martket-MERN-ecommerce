import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
const ClientPrivateRoute = ({ clientAuth: { isAuthenticated, loading }, children, ...rest }) => {
    return (
        <>
            <Route {...rest}>
                {isAuthenticated && !loading ? (children) : (<Redirect to={'/auth'} />)}
            </Route>
        </>
    )
}

const mapStateToProps = state => ({
    clientAuth: state.clientAuth
})

export default connect(mapStateToProps, null)(ClientPrivateRoute)
