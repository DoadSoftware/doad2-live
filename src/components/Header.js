import React from "react";

const Header = ({ className }) => (
  <header
    className={`fixed top-0 left-0 w-full text-white p-4 shadow-md z-50 transition-all duration-500 ${className}`}
  >
    <nav className="container mx-auto flex justify-between items-center">
      <div className="text-2xl font-bold">
        <img src="./images/doad_logo_fulltext_white.png" className="max-h-10 ml-7">
        </img>
      </div>
      <ul className="flex space-x-4">
        <li>
          <a href="#work" className="hover:underline">
            WORK
          </a>
        </li>
        <li>
          <a href="#expertise" className="hover:underline">
            EXPERTISE
          </a>
        </li>
        <li>
          <a href="#about" className="hover:underline">
            ABOUT
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:underline">
            CONTACT
          </a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
