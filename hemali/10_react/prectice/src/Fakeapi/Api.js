import React, { useState, useEffect } from "react";

const Api = () => {
  const [users, setUsers] = useState([]);

  // Fetch data on component mount
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h1>User Data</h1>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>City</th>
            <th>Zipcode</th>
            <th>Latitude</th>
            <th>Phone</th>
            <th>Website</th>
            <th>Company Name</th>
            <th>CatchPhrase</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              {/* Display city and zipcode from address */}
              <td>{user.address.city}</td>
              <td>{user.address.zipcode}</td>
              {/* Display latitude from geo */}
              <td>{user.address.geo.lat}</td>
              <td>{user.phone}</td>
              <td>{user.website}</td>
              {/* Display company name and catchPhrase */}
              <td>{user.company.name}</td>
              <td>{user.company.catchPhrase}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Api;
