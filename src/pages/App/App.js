import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Routes from "../../routes";
import './App.css';

function App() {
  return (
    <div className="App Container pb-3">
      <Navbar expand="md" className="navbar mb-3">
        <Navbar.Brand className="company-title font-weight-bold">
          Hiring Coders Store
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar>
      <Routes />
    </div>
  );
}

export default App;
