import React from 'react';
import ClientHeader from './ClientHeader';
import ClientFooter from './ClientFooter';

const ClientLayout = ({ children }) => {
    return (
        <>
            <ClientHeader />
           {children} 
           <ClientFooter />
        </>
    )
}

export default ClientLayout
