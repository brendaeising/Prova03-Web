import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <Link to="/" class="logo">
        SpaceTime
      </Link>

      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/Cadastro2">Cadastro2</Link>
      </nav>
    </header>
  );
}
