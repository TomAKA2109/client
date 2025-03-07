import React from 'react';
import AuthRouter from './AuthRouter';
import MainRouter from './MainRouter';
import { Spin } from 'antd';

const Routers = () => {
    const isLoading = false; // Define isLoading variable
    // Check login
    const auth = { token: null }; // Define auth variable
    return isLoading ? <Spin /> : !auth.token ? <AuthRouter /> : <MainRouter />;
}

export default Routers;