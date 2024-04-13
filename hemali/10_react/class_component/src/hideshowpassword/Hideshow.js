import React,{useState} from 'react'

const Hideshow = () => {
    const [pass, setpass] = useState(false);
     
    const toggle=()=>{
          setpass(!pass)
    }
  return (
    <div style={{textAlign:'center'}}>
        <h3>Hideshow password</h3>

        <input type={!pass?"password" :"text"} placeholder='Enter a password' name='text' />
        <button>
        <span onClick={toggle}>
           {pass?<i class="fa-solid fa-eye"></i> : <i class="fa-solid fa-eye-slash"></i>}
        </span>
        </button>
    </div>
  )
}

export default Hideshow
