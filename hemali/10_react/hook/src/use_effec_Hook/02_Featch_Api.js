import React,{useEffect,useState} from 'react'

const Featch_Api = () => {
    const [pro,setpro]=useState([])
    useEffect(()=>{
      fetch('https://api.escuelajs.co/api/v1/products').then((result)=>{
        return result.json()
      }).then((res)=>{
        console.log(res);
        setpro(res)
      })
    },[])
  return (
    <>
      {pro.map((prd)=>{
       return(
      <>
      <section1>

        <img src={prd.images}></img>
<div className="section2">
         <h3>{prd.id}</h3>
         <p>{prd.title}</p>
         <span>{prd.price}</span><br></br>
         <b>{prd.description}</b>
         </div>
         </section1>
      </>
       )
      })}
    </>
  )
}

export default Featch_Api
