import React,{useEffect,useState} from 'react'

const Effect = () => {
    // this the syntext of useEffect
//     useEffect(()=>{
//    },[])

// aama useEffect sikha savi aetle pela useeefct run thase pachi je componet run thase 
// api call karva mate useEffect no use thaye se 

useEffect(()=>{
    console.log('hiii this is use effect hook');
    alert('hiiii')
    document.getElementById('h').style.color='red'

},[])
  return (
    <>
      <h1 id='h'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia tempore ipsa possimus, accusantium, ut neque, dolore eius eaque nihil distinctio nobis. Obcaecati, repellendus modi temporibus dolorum ad autem accusamus alias.</h1>
    </>
  )
}

export default Effect