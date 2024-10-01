import React, { useState, useEffect } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const NewApi = () => {
  const [formData, setFormData] = useState({ name: "", email: "" }); // Combined state
  const [subjects, setSubjects] = useState([]);
  const [edit, setEdit] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8003/Subjects")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setSubjects(data);
      });
  }, []);

  const addData = () => {
    if (edit) {
      fetch(`http://localhost:8003/Subjects/${edit.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
        }),
      })
        .then((res) => res.json())
        .then((editedSubject) => {
          setSubjects(
            subjects.map((sub) => (sub.id === edit.id ? editedSubject : sub))
          );
          setFormData({ name: "", email: "" }); // Reset form data
          setEdit(null);
        });
    } else {
      fetch("http://localhost:8003/Subjects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
        }),
      })
        .then((res) => res.json())
        .then((data1) => {
          setSubjects([...subjects, data1]);
          setFormData({ name: "", email: "" }); // Reset form data
        });
    }
  };

  const deleteData = (id) => {
    fetch(`http://localhost:8003/Subjects/${id}`, {
      method: "DELETE",
    }).then(() => {
      setSubjects(subjects.filter((sub) => sub.id !== id));
    });
  };

  const handleEdit = (sub) => {
    setFormData({ name: sub.name, email: sub.email }); // Set form data for editing
    setEdit(sub);
  };

  return (
    <div>
      <input
        type="text"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })} // Update name
        placeholder="Enter Subject Name"
      />
      <input
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })} // Update email
        placeholder="Enter Email"
      />
      <button onClick={addData}>{edit ? "Update" : "Add"}</button>

      <ul>
        {subjects.map((sub) => {
          return (
            <li key={sub.id}>
              {sub.name} - {sub.email}
              <FaEdit className="edit-icon" onClick={() => handleEdit(sub)} />
              <FaTrash
                className="delete-icon"
                onClick={() => deleteData(sub.id)}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NewApi;
