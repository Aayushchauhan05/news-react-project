// Navbar.js
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <>
  
  
  <div className="navbar " style={{backgroundColor:"grey",color:"white",zIndex:"1",width:"100vw", position:"fixed",height:"10vh",}}>
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid " style={{backgroundColor:"#83A2FF",color:"white",zIndex:"1",width:"100vw", position:"fixed",height:"10vh", justifyContent:"space-evenly",display:"flex",alignItems:"center"}}>
      <Link className="navbar-brand" to="/">
        News-hub
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="/navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link  className="nav-link active" aria-current="page" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="/sports">
              Sports
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="/medical">
              Medical
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="/business">
              Business
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="/entertainment">
              Entertainment
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="/technology">
              Technology
            </Link>
          </li>
        </ul>
      </div>
    </div>

  </nav>
  </div>
  
  </>
);

export default Navbar;
