// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashbord';
import Users from './components/Users';
import UserForm from './components/UserForm';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"  element={<Login/>} />
        <Route path="/dashboard" exact element={<Dashboard/>} />
        <Route path="/users" exact element={<Users/>} />
        <Route path="/users/add" exact element={<UserForm/>} />
        <Route path="/users/edit/:id" exact element={<UserForm/>} />

      </Routes>
    </Router>
  );
}

export default App;
