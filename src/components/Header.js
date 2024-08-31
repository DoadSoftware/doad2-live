import React from 'react';
import { useLocation } from 'react-router-dom';

const Header = ({ className }) => {
  const location = useLocation();
  const isMainPage = location.pathname === '/';

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full text-white p-4 shadow-md z-50 transition-all duration-500 bg-[#005C96] ${className}`}
      aria-label="Main Navigation"
    >
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <img
            src="./images/doad_logo_fulltext_white.png"
            className="max-h-10 ml-7"
            alt="Doad Logo"
          />
        </div>
        <ul className="flex space-x-4">
          {isMainPage ? (
            <>
              <li>
                <a
                  href="#work"
                  className="link-3d hover:underline focus:outline-none focus:ring-2 focus:ring-white"
                  aria-label="Navigate to Work section"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('work');
                  }}
                >
                  WORK
                </a>
              </li>
              <li>
                <a
                  href="#expertise"
                  className="link-3d hover:underline focus:outline-none focus:ring-2 focus:ring-white"
                  aria-label="Navigate to Expertise section"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('expertise');
                  }}
                >
                  EXPERTISE
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="link-3d hover:underline focus:outline-none focus:ring-2 focus:ring-white"
                  aria-label="Navigate to About section"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('about');
                  }}
                >
                  ABOUT
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="link-3d hover:underline focus:outline-none focus:ring-2 focus:ring-white"
                  aria-label="Navigate to Contact section"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('contact');
                  }}
                >
                  CONTACT
                </a>
              </li>
            </>
          ) : (
            <>
              <li>
                <a
                  href="/#work"
                  className="link-3d hover:underline focus:outline-none focus:ring-2 focus:ring-white"
                  aria-label="Navigate to Work section on landing page"
                >
                  WORK
                </a>
              </li>
              <li>
                <a
                  href="/#expertise"
                  className="link-3d hover:underline focus:outline-none focus:ring-2 focus:ring-white"
                  aria-label="Navigate to Expertise section on landing page"
                >
                  EXPERTISE
                </a>
              </li>
              <li>
                <a
                  href="/#about"
                  className="link-3d hover:underline focus:outline-none focus:ring-2 focus:ring-white"
                  aria-label="Navigate to About section on landing page"
                >
                  ABOUT
                </a>
              </li>
              <li>
                <a
                  href="/#contact"
                  className="link-3d hover:underline focus:outline-none focus:ring-2 focus:ring-white"
                  aria-label="Navigate to Contact section on landing page"
                >
                  CONTACT
                </a>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
