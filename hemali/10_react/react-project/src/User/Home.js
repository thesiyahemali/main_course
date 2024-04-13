import React from 'react'
import { Outlet } from 'react-router-dom'
import Hadare from './Hadare'
import Footer from './Footer'

const Home = () => {
  return (
    <>
        <Hadare/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Home