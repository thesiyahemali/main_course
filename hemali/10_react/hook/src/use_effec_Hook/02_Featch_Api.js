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
        <img src={prd.images}></img>
         <h3>{prd.id}</h3>
         <p>{prd.title}</p>
         <span>{prd.price}</span>
      </>
       )
      })}
    </>
  )
}

export default Featch_Api
