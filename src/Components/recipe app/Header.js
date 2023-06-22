import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex">
      <Link to="/" className="logo">
        Tasty <br /> Layers
      </Link>
      <nav>
        <ul className="nav-section">
          <li className="active">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/checkout">Checkout</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
