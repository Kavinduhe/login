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

function App() {
  return (
    <div className="App">
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Login />} />
            <Route path="/Admin" element={<Admin />} />
            <Route path="/User" element={<User />} />
            <Route path="/Student" element={<Student />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </div>
  );
}

export default App;
