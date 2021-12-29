import React from 'react';
import { connect } from "react-redux";
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ adminAuth: { isAuthenticated, loading }, children, path }) => {
    return (
        <Route path={path}>
            {isAuthenticated && !loading ? (children) : (<Redirect to="/admin/login" />)}
        </Route>
    )
}

const mapStateToProps = state => ({
    adminAuth: state.adminAuth
})

export default connect(mapStateToProps, null)(PrivateRoute)