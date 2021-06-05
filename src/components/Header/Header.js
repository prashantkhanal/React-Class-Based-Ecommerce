import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container-fluid nav-heading">
          <a
            className="navbar-brand nav-brandname"
            href="https://prashantkhanal.com.np"
          >
            Shop Now
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="https://prashantkhanal.com.np"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://prashantkhanal.com.np">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://prashantkhanal.com.np">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://prashantkhanal.com.np">
                  <i className="fa fa-cart-arrow-down nav__icons"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://prashantkhanal.com.np">
                  Login
                </a>
              </li>
              <li className="nav-item">
                <button className="btn-main">Sign Up</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
export default Header;
