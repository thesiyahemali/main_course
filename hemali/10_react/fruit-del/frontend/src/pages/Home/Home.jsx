import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExpolreMenu from '../../components/ExpolreMenu/ExpolreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownloade from '../../components/AppDownloade/AppDownloade'

const Home = () => {

   const [category,setcategory]=useState("All")

  return (
    <div>
       <Header/>
       <ExpolreMenu  category={category} setcategory={setcategory}/>
       <FoodDisplay category={category}/>
       <AppDownloade/>
    </div>
  )
}

export default Home
