import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom';

function RequireAuth() {

    const {user, token} = useSelector(state=>state.auth);

    if(!token){
        return <Navigate to={'/auth/login'}/>
    }

  return (
    <Outlet/>
  )
}

export default RequireAuth