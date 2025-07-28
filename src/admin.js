import "./admin.css";
import React, { useState } from "react";
import useUser from "./useUser.js";


function Admin() {
  const { users, updatePassword, addUser } = useUser();

  const [newPasswords, setNewPasswords] = useState({});
  const [newUser, setNewUser] = useState({
    username: "",
    password: "",
    id: "",
    role: "",
  });

  const handlePasswordChange = (username, value) => {
    setNewPasswords((prev) => ({
      ...prev,
      [username]: value,
    }));
  };

  const handleEditPassword = (username) => {
    if (newPasswords[username] && newPasswords[username].trim() !== "") {
      updatePassword(username, newPasswords[username]);
      setNewPasswords((prev) => ({
        ...prev,
        [username]: "",
      }));
    }
  };

  const handleNewUserChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    const { username, password, id, role } = newUser;
    if (username && password && id && role) {
      addUser(username, password, id, role);
      setNewUser({ username: "", password: "", id: "", role: "" });
    }
  };

  return (
    <div>
      <h1>Dash Board</h1>
      <a href="https://ltx.hxagoasia.com">Latex Management</a>
      <a href="https://hexagonasia.com">Dispatch Control</a>
      <a href="https://hexagonasia.com">HR Transaction</a>
      <a href="https://hexagonasia.com">Add New Users</a>
      <a href="https://hexagonasia.com">Shipment</a>

      <h1>Welcome to Earthfoam !!!!!!!!!!!!</h1>
      <p>We administrate and control all parties in the system.</p>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTzkKCLw9A_1mfXOjimcmYtbowEAk62zopQg&s"
        alt="mattress"
      />
      <br />

      <h2>User List</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Username</th>
            <th>Input new password</th>
            <th>Save password</th>
          </tr>
        </thead>
        <tbody>
          {users
            .filter((user) => user.role === "user")
            .map((user) => (
              <tr key={user.username}>
                <td>{user.username}</td>
                <td>
                  <input
                    type="password"
                    name="newpassword"
                    value={newPasswords[user.username] || ""}
                    onChange={(e) =>
                      handlePasswordChange(user.username, e.target.value)
                    }
                  />
                </td>
                <td>
                  <button
                    onClick={() => handleEditPassword(user.username)}
                  >
                    Save
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      <h2>Add New User</h2>
      <form onSubmit={handleAddUser} className="add-user-form">
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={newUser.username}
          onChange={handleNewUserChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={newUser.password}
          onChange={handleNewUserChange}
          required
        />
        <input
          type="text"
          name="id"
          placeholder="ID"
          value={newUser.id}
          onChange={handleNewUserChange}
          required
        />
        <input
          type="text"
          name="role"
          placeholder="Role"
          value={newUser.role}
          onChange={handleNewUserChange}
          required
        />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
}

export default Admin;