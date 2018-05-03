import React from "react";


const Nav = () => (
  <nav className="navbar navbar-inverse navbar-top">
    <div className="container-fluid">
      <div className="navbar-header">
        <button type="button" className="collapsed navbar-toggle">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" /> <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <a href="/" className="navbar-brand">
          Penny Power
        </a>
        <a href="/login" className="navbar-brand">
          Login
        </a>
        <a href="/about" className="navbar-brand">
          About Us
        </a>
        <a href="/dashboard" className="navbar-brand">
          Dashboard
        </a>
      </div>
    </div>
  </nav>

);

export default Nav;
