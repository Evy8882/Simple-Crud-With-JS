import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import axios from "axios"
import Home from "./components/Home"
import Create from "./components/Create"
import Edit from "./components/Edit"
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Crud JS</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/edit/:id" element={<Edit/>} />
          <Route path="/create" element={<Create/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
