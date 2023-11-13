import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom';

function RequireAdminAuth({role}) {

  useEffect(()=>{
    setTimeout(()=>{
      //action dispatch to get and check the token
    }, 3000)
  }, [])

    const {user, token} = useSelector(state=>state.auth);

    if(!token || (user && role !== user.role)){
        return <Navigate to={'/auth/login'} replace={true}/>
    }

  return (
    <Outlet/>
  )
}

export default RequireAdminAuth