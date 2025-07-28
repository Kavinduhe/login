import React, { useState } from "react";
import "./App.css";
import { useNavigate } from "react-router";
import { useNavigationType } from "react-router";
import useUser from "./useUser";

const Login = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const { users } = useUser();
  let navigate = useNavigate();

  function Login() {
    if (!username || !password) {
      alert("Please Enter both username and password");
    }

    const choose = users.find((user) => user.username === username);

    if (!choose) {
      alert("Username or password invalid");
    }

    if (password === choose.password) {
      if (choose.role === "admin") {
        navigate("/Admin");
      } else if (choose.role === "user") {
        navigate("/User");
      } else if (choose.role === "student") {
        navigate("/Student");
      }
    } else {
      alert("re-enter the correct password");
    }

    console.log(choose);
  }
  
  return (
    <div className="App">
      <h1>Login</h1>
      <br></br>
      <br></br>
      <br></br>

      <label>UserName</label>
      <input
        type="text"
        id="username"
        name="name"
        value={username || ""}
        onChange={(e) => setUsername(e.target.value)}
      ></input>
      <br></br>
      <br></br>

      <label>password</label>
      <input
        type="password"
        id="password"
        name="password"
        value={password || ""}
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <br></br>
      <br></br>
      <br></br>

      <button onClick={Login}>Log in</button>

      <p>If You Don't have account Sign Up</p>
      <button onClick={() => navigate("/SignUp")}>Sign Up</button>

    </div>
  );
};

export default Login;

