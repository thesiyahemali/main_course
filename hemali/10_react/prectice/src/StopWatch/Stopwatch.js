import React, { useState } from 'react'
import './Stop.css'

const Stopwatch = () => {
    const[time,settime]=useState({hr:0,min:0,sec:0,milli:0})
    const[status,setstatus]=useState()

    let updHr=time.hr
    let updMin=time.min
    let updSec=time.sec
    let updMilli=time.milli

    const start=()=>{
      myfun();
      setstatus(setInterval(myfun,10))
    }

    const stop=()=>{
        clearInterval(status)
    }

    const reset=()=>{
        clearInterval(status);
        settime({hr:0,min:0,sec:0,milli:0})
    }
   
    const myfun=()=>{
      if(updMilli===100){
         updMilli=0;
         updSec++
      }
      if(updSec===60){
        updSec=0;
        updMin++;
      }
      if(updMin===60){
        updMin=0;
        updHr++
      }
      updMilli++;
      return settime({hr:updHr,min:updMin,sec:updSec,milli:updMilli})
    }
  return (
    <>
      <div className='container'>
          <h1>{time.hr + ":"+time.min+":"+time.sec+":"+time.milli}</h1>
          <div className='buttons'>
           <button className='start' onClick={start}>Start</button><br></br>
           <button className='stop' onClick={stop}>Stop</button><br></br>
           <button className='reset' onClick={reset}>Reset</button>

          </div>
      </div>
    </>
  )
}

export default Stopwatch
