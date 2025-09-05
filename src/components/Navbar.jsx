import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function Navbar({ navOpen }) {
  const [activeId, setActiveId] = useState("home");
  const lastActiveLink = useRef(null);
  const activeBox = useRef(null);

  const initActiveBox = () => {
    if (lastActiveLink.current && activeBox.current) {
      activeBox.current.style.top = lastActiveLink.current.offsetTop + "px";
      activeBox.current.style.height = lastActiveLink.current.offsetHeight + "px";
      activeBox.current.style.left = lastActiveLink.current.offsetLeft + "px";
      activeBox.current.style.width = lastActiveLink.current.offsetWidth + "px";
    }
  };

  useEffect(() => {
    initActiveBox();
    window.addEventListener("resize", initActiveBox);
    return () => window.removeEventListener("resize", initActiveBox);
  }, []);

  //  ScrollSpy effect
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { threshold: 0.6 } // section is considered in view if 60% of it is visible
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  useEffect(() => {
    const activeLink = document.querySelector(`.nav-link[href="#${activeId}"]`);
    if (activeLink) {
      if (lastActiveLink.current) {
        lastActiveLink.current.classList.remove("active");
      }
      activeLink.classList.add("active");
      lastActiveLink.current = activeLink;
      initActiveBox();
    }
  }, [activeId]);

  const navItems = [
    { label: "Home", link: "#home" },
    { label: "About", link: "#about" },
    { label: "Project", link: "#projects" },
    { label: "Experience", link: "#experience" },
    { label: "Contact", link: "#contact", className: "md:hidden" },
  ];

  return (
    <nav className={"navbar" + (navOpen ? " active" : "")}>
      {navItems.map(({ label, link, className }, index) => (
        <a
          href={link}
          key={index}
          className={`nav-link ${className || ""}`}
          ref={index === 0 ? lastActiveLink : null} // only first link gets ref
        >
          {label}
        </a>
      ))}
      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
}

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
};

export default Navbar;
