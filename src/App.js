import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import ReactDom from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./admin";
import Login from "./Login";
import User from "./user";
import Student from "./student";
import { UserProvider } from "./UserContext";
import SignUp from "./SignUp";
import PrivateRoute from "./PrivateRoute";
import { RoleProvider } from "./RoleContext";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route element = {<PrivateRoute />}>
              <Route path="/User" element={<User />} />
              <Route path="/Admin" element={<Admin />} />
              <Route path="/Student" element={<Student />} />

            </Route>
            <Route path="/Login" element={<Login />} />
            <Route path="/Admin" element={<Admin />} />
            <Route path="/User" element={<User />} />
            <Route path="/Student" element={<Student />} />
            <Route path="/SignUp" element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </div>
  );
}

export default App;
