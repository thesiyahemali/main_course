import axios from 'axios'
import React,{useEffect,useState,useRef} from 'react'

const Axios_api = () => {
    const [data,setdata]=useState([])
    const inpt=useRef(null)
    useEffect(()=>{
         getData()
    },[])

    const getData=()=>{
        axios.get('http://localhost:8001/std').then((result)=>{
            console.log(result.data);
            setdata(result.data)
        })
    }
     
    const addData=()=>{
        axios.post('http://localhost:8001/std' ,{name:inpt.current.value}).then(()=>{
            getData()
            inpt.current.value=''
        })
    }

    const deleteData=(i)=>{
        axios.delete(`http://localhost:8001/std/${i}`).then(()=>{
            getData()
        })
    }
  return (
    <>
     <center>
        <input type='text' ref={inpt}/>

        <button onClick={()=>{
            addData()
        }}>add</button>

        <table border={1} rules='all'>
          <tr>
          <th>ID</th>
            <th>NAME</th>
            <th>DELTE</th>

          </tr>
          {data.map((result,i)=>{
            return(
                <>
                    <tr>
                    <td>{i+1}</td>
                        <td>{result.name}</td>
                        <button onClick={()=>{
                            deleteData(result.id)
                        }}>Delte</button>
                    </tr>
                </>
            )
          })}
        </table>
     </center> 
    </>
  )
}

export default Axios_api
