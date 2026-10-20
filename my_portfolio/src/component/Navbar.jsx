// import { NavLink } from "react-router-dom";

// import './Navbar.css';
// function Navbar() {
//   return (
//     <nav className="navbar">
//       <h2 className="logo">Vibhuti</h2>

//       <div className="nav-links">
//         <NavLink to="/" end>Home</NavLink>
//         <NavLink to="/about">About</NavLink>
//         <NavLink to="/skills">Skills</NavLink>
//         <NavLink to="/projects">Projects</NavLink>
//         <NavLink to="/resume">Resume</NavLink>
//         <NavLink to="/education">Education</NavLink>
//         <NavLink to="/certificate">Certificates</NavLink>
//         <NavLink to="/contact">Contact</NavLink>

//       </div>
//     </nav>
//   );
// }

// export default Navbar;

import { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("portfolio-theme") || "dark"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) =>
      current === "dark" ? "light" : "dark"
    );
  };

  return (
    <nav className="navbar">
      <a href="#home" className="logo">
        Vibhuti<span>.</span>
      </a>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#resume">Resume</a>
        <a href="#education">Education</a>
        <a href="#certificates">Certificates</a>
        <a href="#contact">Contact</a>
      </div>

      <button
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label={`Switch to ${
          theme === "dark" ? "light" : "dark"
        } mode`}
        title="Toggle theme"
      >
        {theme === "dark" ? "☀️" : "🌙"}
        <span>
          {theme === "dark" ? "Light Mode" : "Dark Mode"}
        </span>
      </button>
    </nav>
  );
}

export default Navbar;

