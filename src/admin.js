import "./admin.css";
import { useState } from "react";
import React from "react";
import useUser from "./useUser";

function Admin() {
  const { users } = useUser();

  const [newPassword, setNewPassword]= useState("");

  const handleClick = () => {
        setNewPassword('new passsword');
      };




  return (
    <div>
      <h1>Dash Board</h1>

      <a href="ltx.hxagoasia.com">Latex Managemt</a>
      <a href="hexagonasia.com">Dispatch contgrol</a>
      <a href="hexgonasia.com">HR transaction</a>
      <a href="hexgonasia.com">Add new users</a>
      <a href="hexgonasia.com">shipment</a>

      <h1>Welcome to Earthfoam !!!!!!!!!!!!</h1>
      <p>we are administrate and control all over the parties in system.</p>

      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTzkKCLw9A_1mfXOjimcmYtbowEAk62zopQg&s"
        alter="mettrress"
      ></img>
    <br/>
   
          
         
          
          
          
      


        
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
      .map((user, index) => (
        <tr key={index}>
          <td>{user.username}</td>
          <td>
            <input
          type="password"
          name="newpassword"
          value={newPassword || ""}
          onChange={(e) => setNewPassword(e.target.value)}

        />

          </td>
          <td><button>Edit</button></td>
          
        </tr>
      ))}
  </tbody>
</table>


    </div>
  );
}

export default Admin;
