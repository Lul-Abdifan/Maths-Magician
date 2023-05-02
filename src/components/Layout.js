import { Link } from 'react-router-dom';
import React from 'react';
import './Layout.scss';

const Layout = () => (
  <nav className="navigation">
    <h1>Math Magicians</h1>
    <div className="comp-navbar">
      <ul className="links">
        <li>
          <Link className="routes" to="/home">
            Home
          </Link>
        </li>
        <li>
          <Link className="routes" to="/calculator">
            Calculator
          </Link>
        </li>
        <li>
          <Link className="routes" to="/quote">
            Quote
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Layout;
