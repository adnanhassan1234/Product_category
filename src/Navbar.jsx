import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

  const isActive = {
    fontWeight: "bold",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    color: "red",
    padding: "8px",
  };
 
   return (
                          // Navbar section
    <>           
      <nav className="navbar active navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <NavLink to="/category" className="navbar-brand">ECOMMERCE</NavLink>
          <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <i className="fa fa-bars" aria-hidden="true"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav menus navbar-collapse">
              <NavLink to="/category" className=" nav-link" exact activeStyle={isActive} aria-current="page">Category</NavLink>
            </div>
            <div className="navbar-nav ms-auto">
              <NavLink exact to="/signup" className="signup">Sign up</NavLink>
              <NavLink exact  to="/login" className="login">Log in</NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  )                                         
}

export default Navbar;
