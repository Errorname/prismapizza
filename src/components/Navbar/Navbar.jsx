import React from 'react'

import './Navbar.css'

const Navbar = () => (
  <nav className="navbar">
    <div className="container">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img src="favicon-96x96.png" alt="logo" />
          <span className="navbar-brand-title">Prisma Pizza</span>
        </a>
      </div>
      <div className="navbar-menu">
        <div className="navbar-end">
          <a
            className="navbar-item navbar-github"
            href="https://github.com/Errorname/prismapizza"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github fa-2x" />
          </a>
        </div>
      </div>
    </div>
  </nav>
)

export default Navbar
