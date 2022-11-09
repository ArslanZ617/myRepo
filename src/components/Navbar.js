import React from "react";
import PropTypes from "prop-types";
import logo from "../logo.svg";
import "./styles.css";

import { Link, NavLink } from "react-router-dom";

export default function Nabvar(prop) {

  return (
    
    

    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${prop.mode} bg-${prop.mode}`}
      >
        <div className="container-fluid">
          <NavLink to="/">
          <img className="logo" src={logo} alt="logo Here" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
            </ul>

              <div className="bg-primary rounded me-3" onClick={()=>{prop.toggleMode("primary")}} style={{width: "30px", height: "30px"}}></div>
              <div className="bg-danger rounded me-3" onClick={()=>{prop.toggleMode("danger")}} style={{width: "30px", height: "30px"}}></div>
              <div className="bg-warning rounded me-3" onClick={()=>{prop.toggleMode("warning")}} style={{width: "30px", height: "30px"}}></div>
              <div className="bg-success rounded me-3" onClick={()=>{prop.toggleMode("success")}} style={{width: "30px", height: "30px"}}></div>

            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-primary me-2" type="submit">
                Search
              </button>
            </form>

            <div className={`form-check form-switch text-${prop.mode==='light'?'dark':'light'}`}>
              <input
                className="form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefault"
                onClick={()=>{prop.toggleMode(null)}}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                Dark Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

// NavBar.propTypes = {
//   title: PropTypes.string.isRequired,
//   aboutText: PropTypes.string.isRequired
// }
