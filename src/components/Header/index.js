import React, { useState } from "react";
import { scrollIntoViews } from "../../consts";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const goHomeAndScroll = (selector) => {
    // If not already on home, go to home first
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollIntoViews(selector), 200);
    } else {
      scrollIntoViews(selector);
    }
    setShow(false);
  };

  return (
    <nav className="navbar">
      <span className="navbar-toggle-btn">
        <i
          className="three_bars"
          onClick={() => setShow(!show)}
        >
          <svg
            className="svg-inline--fa fa-bars fa-w-14"
            aria-hidden="true"
            data-prefix="fas"
            data-icon="bars"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
            />
          </svg>
        </i>
      </span>
     <Link to="/" className="logo"></Link>
      <ul className={`main-nav ${show ? "active-bar" : ""}`}>
        <li>
          <a
            href="#"
            className="nav-links"
            onClick={(e) => {
              e.preventDefault();
              goHomeAndScroll(".home");
            }}
          >
            Home
          </a>
        </li>

        <li>
          <a
            href="#"
            className="nav-links"
            onClick={(e) => {
              e.preventDefault();
              goHomeAndScroll(".skills");
            }}
          >
            Projects
          </a>
        </li>

        <li>
          <a
            href="#"
            className="nav-links"
            onClick={(e) => {
              e.preventDefault();
              goHomeAndScroll(".custom_footer");
            }}
          >
            Contact
          </a>
        </li>

        <li>
          <Link
            to="/blog"
            className="nav-links"
            onClick={() => setShow(false)}
          >
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
