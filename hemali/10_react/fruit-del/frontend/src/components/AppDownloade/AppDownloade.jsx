import React from 'react'
import './AppDownlode.css'
import { assets } from '../../assets/assets'

const AppDownloade = () => {
  return (
    <div className='app-download' id='app-downloade'>
     <p>for Better Experience Download <br/> Tomato App</p>
     <div className="app-download-platforms">
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
     </div>
    </div>
  )
}

export default AppDownloade