import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { loadAdmin } from '../../../redux/actions/admin';
import AdminDashboard from '../Dashboard/AdminDashboard';




const AdminPanel = ({ loadAdmin }) => {
    return (
        <Fragment>
            <AdminDashboard />
        </Fragment>
    )
}


export default connect(null, { loadAdmin })(AdminPanel);
