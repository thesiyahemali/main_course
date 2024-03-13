import React,{useEffect,useState} from 'react'

const Jsonapi = () => {
    const [pro,setpro]=useState([])
    useEffect(()=>{
      fetch('http://localhost:8001/std').then((result)=>{
        return result.json()
      }).then((res)=>{
        console.log(res);
        setpro(res)
      })
    },[])
  return (
    <>
       {pro.map((pre)=>{
         return(
            <>
            <table>
            <th>{pre.id}</th>
           

        
                <td>{pre.name}</td>
                <td>{pre.marks}</td>
                </table>
            </>
         )
       })}
    </>
  )
}

export default Jsonapi
