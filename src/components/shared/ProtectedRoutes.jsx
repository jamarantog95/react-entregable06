import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = () => {

    if (localStorage.getItem('token')) {
        // Estoy logged
        return <Outlet />
    } else {
        // !!!!NO Estoy logged
        return <Navigate to='/login' />
    }


}

export default ProtectedRoutes