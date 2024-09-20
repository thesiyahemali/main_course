import React, { useState, useEffect } from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa';

const NewApi = () => {
    const [input, setInputs] = useState('')
    const [subject, setSubjects] = useState([])

    useEffect(() => {
        fetch('http://localhost:8003/Subjects').then((Response) => {
            return Response.json()
        }).then((data) => {
            console.log(data)
            setSubjects(data)

        })
    }, [])

    const AddData = () => {
        fetch('http://localhost:8003/Subjects', {
            method: "POSt",
            body: JSON.stringify({
                name: input
            })
        }).then((res) => {
            return res.json()
        }).then((data1) => {
            setSubjects([...subject, data1])
            setInputs('');
        })
    }

    const deletedata =(id)=>{
         fetch(`http://localhost:8003/Subjects/${id}`,{
            method:'DELETE',
         }).then(()=>{
            setSubjects(subject.filter((sub)=>sub.id!==id))

         })
    }
    return (
        <div>
            <input type='text'
                value={input}
                onChange={(e) => setInputs(e.target.value)}
            >
            </input>
            <button onClick={AddData}>AddData</button>

            <ul>
                {subject.map((sub) => {
                    return (
                        <>
                            <li>
                                {sub.name}
                                <FaEdit className="edit-icon" />
                                <FaTrash className="delete-icon" onClick={() => deletedata(sub.id)}  />
                            </li>
                        </>
                    )
                })}
            </ul>
        </div>


    )
}

export default NewApi   
