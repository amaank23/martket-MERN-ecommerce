import React from 'react';
import DashboardLayout from '../../Layout/DashboardLayout';
import { Route } from 'react-router-dom';
import CategoryPanel from '../CategoryPanel/CategoryPanel';
import ProductPanel from '../ProductPanel/ProductPanel';
import OrderPanel from '../OrderPanel/OrderPanel';
import AdminLogout from '../AdminAuth/AdminLogout';
import AddProduct from '../ProductPanel/AddProduct';

const AdminDashboard = () => {  
    return (
        <div className="Admindashboard">
            <DashboardLayout>
                <Route path="/admin/add-product">
                    <AddProduct />
                </Route>
                <Route path="/admin/products">
                    <ProductPanel />
                </Route>
                <Route path="/admin/category">
                    <CategoryPanel />
                </Route>
                <Route path="/admin/orders">
                    <OrderPanel />
                </Route>
                <Route path="/admin/logout">
                    <AdminLogout />
                </Route>
            </DashboardLayout>
        </div>
    )
}

export default AdminDashboard
