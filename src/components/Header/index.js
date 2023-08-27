import React, { useState } from 'react'
import { scrollIntoView } from '../../common/consts';

const Header = () => {
  const [show, setShow] = useState(false);
  return (
    <nav className="navbar">
      <span className="navbar-toggle-btn">
        <i
          className="three_bars"
          onClick={() => {
            setShow(!show);
          }}
        >
          <svg
            className="svg-inline--fa fa-bars fa-w-14"
            aria-hidden="true"
            data-prefix="fas"
            data-icon="bars"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            data-fa-i2svg=""
          >
            <path
              fill="currentColor"
              d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
            />
          </svg>
        </i>
      </span>
      <a href="#" className="logo"></a>
      <ul className={`main-nav ${show ? "active-bar" : ""}`}>
        <li>
          <a
            href="#"
            className="nav-links"
            onClick={() => {
              scrollIntoView(".home");
            }}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#"
            className="nav-links"
            onClick={() => {
              scrollIntoView(".about");
            }}
          >
            About
          </a>
        </li>
        <li
          onClick={() => {
            scrollIntoView(".custom_footer");
          }}
        >
          <a href="#" className="nav-links">
            Contact
          </a>
        </li>
        <li>
          <a href="https://wa.me/+919610928997" className="nav-links">
            Ping me on WhatsApp?
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Header