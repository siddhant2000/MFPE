import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,useNavigate
} from "react-router-dom";

export default function Navbar() {
  const navigate= useNavigate();
const navigateHome = () => { 
    navigate('/Home');
};
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Sports Event Managment System</a>
    
<button className="btn btn-outline-light" onClick={navigateHome}>Home</button>
  </div>
</nav>
 
    </div>
  )
}
