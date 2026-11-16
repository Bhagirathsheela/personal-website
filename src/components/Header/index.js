import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { scrollIntoViews } from "../../consts";

const NAV_ITEMS = [
  { label: "Home", target: ".home" },
  { label: "Work", target: ".projects" },
  { label: "Education", target: ".education" },
  { label: "Contact", target: ".custom_footer" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const goToSection = (selector) => {
    setOpen(false);

    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: selector } });
      window.requestAnimationFrame(() => scrollIntoViews(selector));
      return;
    }

    scrollIntoViews(selector);
  };

  return (
    <nav className="navbar">
      <Link
        to="/"
        className="logo"
        aria-label="Bhagirath Sheela — home"
        onClick={() => setOpen(false)}
      />

      <button
        type="button"
        className="navbar-toggle-btn"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="main-nav"
        aria-label={open ? "Close menu" : "Open menu"}
      >
        <span className={`burger${open ? " burger_open" : ""}`} aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
      </button>

      <ul id="main-nav" className={`main-nav ${open ? "active-bar" : ""}`}>
        {NAV_ITEMS.map((item) => (
          <li key={item.label}>
            <button
              type="button"
              className="nav-links"
              onClick={() => goToSection(item.target)}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
