import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:8003/users';

function DataManagement() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  // Fetch users from the API
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(API_URL);
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users', error);
    }
  };

  // Delete user by ID
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchUsers(); // Refresh user list after deletion
    } catch (error) {
      console.error('Error deleting user', error);
    }
  };

  // Start editing a user
  const handleEdit = (user) => {
    setEditingUser({ ...user, originalPassword: user.password });
  };

  // Save user data
  const handleSave = async (user) => {
    try {
      const updatedUser = { ...user };

      // Only send password if it's been changed (if not empty)
      if (updatedUser.password === updatedUser.originalPassword) {
        delete updatedUser.password;
      }

      await axios.put(`${API_URL}/${updatedUser.id}`, updatedUser);
      setEditingUser(null); // Close the edit mode
      fetchUsers(); // Refresh the user list after update
    } catch (error) {
      console.error('Error updating user', error);
    }
  };

  // Handle changes to the input fields
  const handleChange = (e, field) => {
    setEditingUser({
      ...editingUser,
      [field]: e.target.value
    });
  };

  return (
    <div>
      <h2>Data Management</h2>
      {users.length === 0 ? (
        <p>No users found!</p>
      ) : (
        <table border="1" cellPadding="10" cellSpacing="0" style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>
                  {editingUser?.id === user.id ? (
                    <input
                      type="text"
                      value={editingUser.name}
                      onChange={(e) => handleChange(e, 'name')}
                      placeholder="Name"
                    />
                  ) : (
                    user.name
                  )}
                </td>
                <td>
                  {editingUser?.id === user.id ? (
                    <input
                      type="email"
                      value={editingUser.email}
                      onChange={(e) => handleChange(e, 'email')}
                      placeholder="Email"
                    />
                  ) : (
                    user.email
                  )}
                </td>
                <td>
                  {editingUser?.id === user.id ? (
                    <input
                      type="password"
                      value={editingUser.password}
                      onChange={(e) => handleChange(e, 'password')}
                      placeholder="Password"
                    />
                  ) : (
                    user.password // Hide password for security
                  )}
                </td>
                <td>
                  {editingUser?.id === user.id ? (
                    <>
                      <button onClick={() => handleSave(editingUser)}>Update</button>
                      <button onClick={() => setEditingUser(null)}>Delete</button>
                    </>
                  ) : (
                    <>
                      <button onClick={() => handleEdit(user)} style={{ marginRight: '10px' }}>Update</button>
                      <button onClick={() => handleDelete(user.id)}>Delete</button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default DataManagement;
