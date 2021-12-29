import { useEffect } from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../../../redux/actions/admin';



const AdminLogout = ({ logoutUser }) => {

    useEffect(() => {
        logoutUser();
    }, [logoutUser])

    return null;
}

export default connect(null, { logoutUser })(AdminLogout)
