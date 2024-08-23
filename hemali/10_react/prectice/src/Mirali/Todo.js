import React, { useEffect, useState } from "react";
import axios from "axios";
// import './Datata.css'; // Import the CSS file

const Datata = () => {
  const baseurl = "https://dummyjson.com/todos";  // Changed API endpoint
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: 'id', direction: 'asc' });

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get(baseurl);
        const allTodos = response.data.todos;  // Adjusted based on the API response structure
        setTodos(allTodos);
        setFilteredTodos(allTodos); // Initialize filteredTodos with all fetched todos
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchTodos();
  }, []);

  useEffect(() => {
    const results = todos.filter((todo) =>
      todo.todo.toLowerCase().includes(searchTerm.toLowerCase())  // Adjusted based on the new API structure
    );
    setFilteredTodos(results);
  }, [searchTerm, todos]);

  const requestSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
    const sortedTodos = [...filteredTodos].sort((a, b) => {
      if (a[key] < b[key]) {
        return direction === 'asc' ? -1 : 1;
      }
      if (a[key] > b[key]) {
        return direction === 'asc' ? 1 : -1;
      }
      return 0;
    });
    setFilteredTodos(sortedTodos);
  };

  return (
    <div className="table-container">
      <h1>Table</h1>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th style={{ width: "20%" }} onClick={() => requestSort('id')}>
              ID {sortConfig.key === 'id' ? (sortConfig.direction === 'asc' ? '↑' : '↓') : ''}
            </th>
            <th style={{ width: "80%" }} onClick={() => requestSort('todo')}>
              Todo {sortConfig.key === 'todo' ? (sortConfig.direction === 'asc' ? '↑' : '↓') : ''}
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredTodos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.todo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Datata;
