import axios from "axios";
import { func } from "prop-types";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Read = () => {
  const [data, setdata] = useState([]);
  const [tabledark, setTabledark] = useState("");
  function getData() {
    axios
      .get("https://665420911c6af63f46767cd8.mockapi.io/curd1")
      .then((res) => {
        console.log(res.data);
        setdata(res.data);
      });
  }

  function handleDelete(id) {
    axios
      .delete(`https://665420911c6af63f46767cd8.mockapi.io/curd1/${id}`)
      .then(() => {
        getData();
      });
  }

  const setToLocalStorage = (id, name, email) => {
    console.log(id, name, email);

    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div class="form-check form-switch">
        <input
          class="form-check-input"
          type="checkbox"
          onClick={() => {
            if (tabledark === "table-dark") setTabledark("");
            else setTabledark("table-dark");
          }}
        />
      </div>

      <div className="d-flex justify-content-between mt-3 me-5 pe-5">
        <h3>Read Operatons</h3>

        <Link to={"/"}>
          <button className="btn btn-secondary">Create Data</button>
        </Link>
      </div>
      <table className={`table mt-3 ${tabledark}`}>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        {data.map((eachData) => {
          return (
            <>
              <tbody>
                <tr>
                  <th scope="row">{eachData.id}</th>

                  <td>{eachData.name}</td>
                  <td>{eachData.email}</td>
                  <td>
                    <Link to={"/update"}>
                      <button
                        className="btn btn-success"
                        onClick={() =>
                          setToLocalStorage(
                            eachData.id,
                            eachData.name,
                            eachData.email
                          )
                        }
                      >
                        Edit
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      className=" btn btn-danger"
                      onClick={() => handleDelete(eachData.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </>
          );
        })}
      </table>
    </>
  );
};

export default Read;
