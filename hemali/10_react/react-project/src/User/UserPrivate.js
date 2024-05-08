import { Outlet, Navigate } from "react-router-dom";
export const UserPrivate = () => { 
    const auth =localStorage.getItem('admin')
    return (
      
        auth == 'false' ? <Outlet /> : <Navigate to={'/login'} />
     )
}