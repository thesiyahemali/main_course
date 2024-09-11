import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'


const Todo_api = () => {
  const [data, setdata] = useState([])
  const [Edit, setEdit] = useState(null)
  const input = useRef(null)

  useEffect(() => {
    getData()
  })

  const getData = () => {
    axios.get("http://localhost:8002/Student").then((result) => {
      setdata(result.data)
    })
  }

  const addData = () => {
    if (Edit) {
      axios.put(`http://localhost:8002/Student/${Edit}`, { name: input.current.value }).then(() => {
        getData()
        setEdit(null)
        input.current.value = ''
      });
    } else {
      axios.post("http://localhost:8002/Student", { name: input.current.value }).then(() => {
        getData()
        input.current.value = ''
      })
    }
  }

  const deleteData = (id) => {
    axios.delete(`http://localhost:8002/Student/${id}`).then(() => {
      getData()
    })
  }

  const UpdateData = (id, cuurentName) => {
    setEdit(id)
    input.current.value = cuurentName
  }
  return (
    <div>
      <center>
        <input type='text' name='' id='' ref={input} style={{ marginTop: 10, height: 25 }}></input>
        <button onClick={addData} style={{ padding: '6px 25px', marginLeft: 5 }}>{Edit ? 'Update' : 'Add'}</button>

        <table style={{ marginTop: 20 }} border={1}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
            {data.map((result, i) => {
              return (
                <>
                  <tr>
                    <td>{i + 1}</td>
                    <td>{result.name}</td>
                    <th>

                      <td><button onClick={() => {
                        UpdateData(result.id, result.name)
                      }} style={{ marginRight: 10 }}>
                        Update
                      </button>


                        <button onClick={() => {
                          deleteData(result.id)
                        }}>Delete</button>

                      </td>
                    </th>
                  </tr>
                </>
              )
            })}
          </thead>
        </table>
      </center>

    </div>
  )
}

export default Todo_api
