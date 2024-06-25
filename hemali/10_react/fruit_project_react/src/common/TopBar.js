import React from 'react'
import { Link } from 'react-router-dom'

const TopBar = () => {
  return (
    <>
      <div className='container topbar bg-primary d-none d-lg-block '>
        <div className="d-flex justify-content-between">
          <div className="top-info ps-2">
            <small>
              <i className='fas fa-map-maker-alt-me-2 text-secondary'></i>
              <a className='text-white'>
                123 street,new York
              </a>
            </small>

            <small>
              <i className='fas fa-map-maker-alt-me-2 text-secondary'></i>
              <a className='text-white'>
                 email@example.com
              </a>
            </small>
          </div>
          <div className="top-link pe-2">
              <a href="#">Privacy policy</a>
              <a href="#">Terms of use</a>  <a href="#">Sales and Refunds</a>   
          </div>
        </div>
      </div>
    </>
  )
}

export default TopBar
