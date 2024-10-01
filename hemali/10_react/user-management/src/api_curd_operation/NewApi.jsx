import React, { useState, useEffect } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const NewApi = () => {
  const [input, setInputs] = useState("");
  const [subject, setSubjects] = useState([]);
  const [Edit, setEdit] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8003/Subjects")
      .then((Response) => {
        return Response.json();
      })
      .then((data) => {
        console.log(data);
        setSubjects(data);
      });
  }, []);

  const AddData = () => {
    if (Edit) {
      fetch(`http://localhost:8003/Subjects/${Edit.id}`, {
        method: "PUT",
        body: JSON.stringify({
          name: input, // Update with the current input value
        }),
      })
        .then((res) => {
          return res.json();
        })
        .then((editsubject) => {
          setSubjects(
            subject.map((sub) => (sub.id === Edit.id ? editsubject : sub))
          );
          setInputs("");
          setEdit(null);
        });
    } else {
      fetch("http://localhost:8003/Subjects", {
        method: "POSt",
        body: JSON.stringify({
          name: input,
        }),
      })
        .then((res) => {
          return res.json();
        })
        .then((data1) => {
          setSubjects([...subject, data1]);
          setInputs("");
        });
    }
  };

  const deletedata = (id) => {
    fetch(`http://localhost:8003/Subjects/${id}`, {
      method: "DELETE",
    }).then(() => {
      setSubjects(subject.filter((sub) => sub.id !== id));
    });
  };

  const handleEdit = (sub) => {
    setInputs(sub.name);
    setEdit(sub);
  };
  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInputs(e.target.value)}
      ></input>
      <button onClick={AddData}>{Edit ? "update" : "Add"}</button>

      <ul>
        {subject.map((sub) => {
          return (
            <>
              <li key={sub.id}>
                {sub.name}
                <FaEdit className="edit-icon" onClick={() => handleEdit(sub)} />
                <FaTrash
                  className="delete-icon"
                  onClick={() => deletedata(sub.id)}
                />
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default NewApi;
