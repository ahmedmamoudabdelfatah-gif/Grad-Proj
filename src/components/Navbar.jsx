/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import '../styles/NavBar.css'

export default function Navbar() {
  return (
      <header className="header">
        <div className="container">
        <div className="logo">PREZOPHOPIA</div>
        <ul className="nav-bar">
          <li><Link className="link" to={"/"}>Home</Link></li>
          <li><Link className="link" to={"/posts"}>Posts</Link></li>
          <li className="btn"><Link className="link" to={"/signin"}>Login</Link></li>
          <li className="btn"><Link className="link" to={"/register"}>Register</Link></li>
        </ul>
        </div>
    </header>
  )
}