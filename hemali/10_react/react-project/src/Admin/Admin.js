import React from 'react'
import Hader from './Hader'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const Admin = () => {
  return (
    <div>
      <Hader/>
      <div className="Container-fluid">
          <div className="row">
            <div className="col-md-3 sidebar ">
               <Sidebar/>
            </div>
            <div className="col-md-9 content">
              <Outlet/>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Admin
