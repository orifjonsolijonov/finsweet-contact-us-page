import { useState } from 'react'
import Logo from "/src/assets/Logo.svg"
import hamburgerMenu from "/src/assets/hamburger.svg"
import './header.scss'



function Header() {


  return (
    <header>
      <div class="container">
        <div class="logo-wrapper">
          <img
            src={hamburgerMenu}
            alt="menu-icon"
            class="menu"
            id="menu"
          />
          <a href="#">
            <img src={Logo} alt="Finsweet" class="logo" />
          </a>
        </div>
        <div class="nav-wrapper">
          <nav>
            <ul>
              <li><a href="#" class="active-page">Home</a></li>
              <li><a href="#">About us</a></li>
              <li><a href="#">Features</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </nav>
          <button class="contactUs">Contact us</button>
        </div>
      </div>
    </header>
  )
}

export default Header
