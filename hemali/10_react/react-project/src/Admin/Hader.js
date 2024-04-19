import React from 'react'
import { useNavigate } from 'react-router-dom'

const Hader = () => {
   const Navigate=useNavigate()

   const logout=()=>{
      localStorage.removeItem('user')
      localStorage.removeItem('admin')
      Navigate('/login')
   }
  return (
    <>
    {/* <ToastContainer/> */}
    <nav class="navbar navbar-expand-lg navbar-custom fixed-top" style={{backgroundColor:'#e4e4e4'}}>
      <div class="container-fluid">
          <a class="navbar-brand" href="#">Admin Panel</a>
          <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav ms-auto">
                  <li class="nav-item">
              <button class="btn btn-outline-light btn-logout" onClick={() => { 
                logout()
              }}>Logout</button>
                  </li>
              </ul>
          </div>
      </div>
  </nav>
  </>
  )
}

export default Hader
