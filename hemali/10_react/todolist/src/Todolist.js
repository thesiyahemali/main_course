// import React,{useRef,useState}from 'react'

// const todolist = () => {
//     const inputRef=useRef(null)
//      const  adddata=()=>{
//         const data=inputRef.current.value.trim()
//      if(data !== ''){
//         const list=document.getElementById('task')
//         const newt=document.createElement('li')

//         newt.textContent=data;
//         list.appendChild(newt)
//         inputRef.current.value=''
//     }
//      }
//   return (
//     <>
//       <center>
//       <div>
//           <input type='text' ref={inputRef}/>
//           <button onClick={()=>{
//              adddata()
//           }}>Add Data</button>
//           </div>

//           <div>
//             <ul id='task'></ul>
//           </div>
//       </center>

//     </>
//   )
// }

// export default todolist
