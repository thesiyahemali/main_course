import React,{useState,useEffect, useRef}from 'react'

const Curd_Form = () => {
    const [input,setinput]=useState({name:'',email:'',phone:''})
    const[data,setData]=useState([])
    const [id,setId]=useState(null)
    const name=useRef('')
    const email=useRef('')
    const phone=useRef('')

     useEffect(()=>{
      console.log('input');
      },[input])

      useEffect(()=>{
        console.log(data);
        
      },[data])

    const handlechange=(e)=>{
        setinput({...input,[e.target.name]: e.target.value})
       
    }

    const handlesubmit=(e)=>{
        e.preventDefault();
        if(id==null){
            setData([...data, input]) 
        }else{
            let updata=[...data]
            updata[id].name=name.current.value
            updata[id].email=email.current.value
            updata[id].phone=phone.current.value
            setData(updata)
        }
        setinput({name:'',email:'',phone:''})
        name.current.value=''
        email.current.value=''
        phone.current.value=''
        setId(null)
    }

    const deleteData=(i)=>{
       let newData=[...data]
       newData.splice(i,1)
       setData(newData)
    }

    const updateData=(res,index)=>{
        setId(index)
        name.current.value = res.name
        email.current.value = res.email
        phone.current.value = res.phone

    }

   
  return (
    <>
        <form style={{textAlign:'center',background:'pink' ,height:'200px',padding:'20px',width:'500px',}} onSubmit={handlesubmit}>

            <label style={{margin:'10px'}}>Name</label>
            <input type='text' name='name' id='' ref={name}  onKeyUp={handlechange}/>
            <br />
            <br />

            <label style={{margin:'10px'}}>Email</label>
            <input type='email' name='email' id='' ref={email}  onKeyUp={handlechange} />
            <br />
            <br />

            <label style={{margin:'9px'}}>phone</label>
            <input type='phone' name='phone' id='' ref={phone}  onKeyUp={handlechange}/>
            <br />
            <br />
         
            <input type="submit" value="submit" />
        </form>

        <table border={1} rules='all'>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Action</th>
             
            </tr>
       

        {data.map((result,index)=>{
            return(
              <>
              <tr>
                <td>{result.name}</td>
                <td>{result.email}</td>
                <td>{result.phone}</td>

                  <td><button onClick={()=>{
                    deleteData(index)
                  }}>Delte</button>
                  <button onClick={()=>{
                    updateData(result,index)
                  }}>Update</button>
                  </td>
                </tr>
              </>
            )
        })}
         </table>
    </>
  )
}

export default Curd_Form