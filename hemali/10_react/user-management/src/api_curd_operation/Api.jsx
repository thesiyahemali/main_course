import React, { useState, useEffect } from 'react';
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa'; // Import Font Awesome icons
import './Api.css'; // Import custom styles

const Api = () => {
    const [inputs, setInputs] = useState('');
    const [subjects, setSubjects] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8003/Subjects').then((response) => {
        return response.json()
        }).then((res) => {
            setSubjects(res)
            console.log(res);
            
        })
    }, [])

    const handleAddSubject = () => {
        fetch('http://localhost:8003/Subjects', {
            method: "POST",
            body: JSON.stringify({
                name: inputs
            })
        }).then((responsee) => {
            return responsee.json()
        }).then((ress) => {
            setSubjects([...subjects, ress])
            setInputs('')
            // console.log(ress);
            
        })
    }


    return (
        <>
            <div className="container">
                <h3>Subject Manager</h3>

                {/* Input Box with Plus Button Inside */}
                <div className="input-container">
                    <input
                        type="text"
                        value={inputs}
                        onChange={(e) => setInputs(e.target.value)}
                        className="subject-input"
                        placeholder="Enter subject"
                    />
                    <button onClick={handleAddSubject} className="add-button-inside" >
                        <FaPlus
                        />
                    </button>
                </div>

                {/* Example list with Edit and Delete */}
                <ul className="subject-list">

                    {subjects.map((sub) => {
                        return (
                            <li key={sub.id}>
                                {sub.name}
                                <FaEdit className="edit-icon" />
                                <FaTrash className="delete-icon" />
                            </li>
                        )
                    })}

                </ul>
            </div>



           
                        
        </>
    );
};

export default Api;
