import React, { useEffect } from 'react'

const Covide = () => {

    const getcovideData=async()=>{
      try {
        const res=await fetch('https://api.covid19india.org/data.json');
        const actualdata= res.json();
        console.log(actualdata.ststewise[0]);
      } catch (err) {
        console.log(err);
      }
    }
    useEffect (()=>{
        getcovideData()
    },[])
  return (
    <>
      <h1>LIVE</h1>
      <h2>COVID-19 CORONAVIRUS TRACKER</h2>
    </>
  )
}

export default Covide
