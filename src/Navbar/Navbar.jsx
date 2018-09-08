import React from 'react'
import cn from 'classnames'

import './Navbar.css'

const Navbar = ({ currentMode, toggleMode, className }) => (
  <nav className={cn('navbar', className)}>
    <div className="container">
      <div className="navbar-brand">
        <a className="navbar-item" href="./">
          <img src="favicon-96x96.png" alt="logo" />
          <span className="navbar-brand-title">Prisma Pizza</span>
        </a>
      </div>
      <div className="navbar-menu">
        <div className="navbar-end">
          <a className="navbar-item" onClick={toggleMode}>
            <span
              className={cn({ 'is-hidden': currentMode === 'presentation' })}
            >
              <i className="fas fa-desktop" />
            </span>
            <span className={cn({ 'is-hidden': currentMode === 'demo' })}>
              <i className="fas fa-shopping-cart" />
            </span>
          </a>
        </div>
      </div>
    </div>
  </nav>
)

export default Navbar
