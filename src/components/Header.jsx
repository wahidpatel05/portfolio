import React, { useState } from "react";
import Navbar from "./Navbar";

function Header() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
      <div className="max-w-screen-2xl w-full mx-auto px-4 flex items-center justify-between md:px-6">
        
        {/* Logo (Left) */}
        <h1>
          <a href="" className="logo">
            <img
              src="/images/logo.svg"
              width={40}
              height={40}
              alt="Logo"
            />
          </a>
        </h1>

        {/* Navbar (Center on Desktop) */}
        <div className="hidden md:flex flex-1 justify-center">
          <Navbar navOpen={false} />
        </div>

        {/* Right Section */}
        <div className="flex items-center ml-auto">
          {/* Hamburger (Mobile Only) */}
          <button
            className="menu-btn md:hidden"
            onClick={() => setNavOpen((prev) => !prev)}
          >
            <span className="md:hidden material-symbols-outlined">
              {navOpen ? "close" : "menu"}
            </span>
          </button>

          {/* Navbar (Mobile Dropdown) */}
          <div className="md:hidden">
            <Navbar navOpen={navOpen} />
          </div>

          {/* Contact Me (Desktop Only) */}
          <a
  href="#contact"
  className="btn btn-secondary hidden md:flex ml-4"
>
  Contact Me
</a>
        </div>
      </div>
    </header>
  );
}

export default Header;
