import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Header = ({ className }) => {
  const location = useLocation();
  const isMainPage = location.pathname === "/";
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const updatedClassName = isMainPage ? className : "header-scrolled";
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
  };
  const [imageSrc, setImageSrc] = useState(
    "./images/doad_logo_fulltext_white.png"
  );
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setImageSrc("./images/logo-white.png");
      } else if (window.innerWidth < 768) {
        setImageSrc("./images/doad_logo_fulltext_white.png");
      } else {
        setImageSrc("./images/doad_logo_fulltext_white.png");
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full text-white p-4 z-50 transition-all duration-500 ${updatedClassName}`}
      aria-label="Main Navigation"
    >
      <nav className="font-Montserrat container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <a
            href="#heroSection"
            aria-label="Navigate to Expertise section"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("heroSection");
            }}
          >
            <img
              loading="lazy"
              src={imageSrc}
              className="max-h-10 ml-7"
              alt="Doad Logo"
            />
          </a>
        </div>
        <ul className="hidden md:flex space-x-4">
          {isMainPage ? (
            <>
              <li>
                <a
                  href="#work"
                  className="hover:underline"
                  aria-label="Navigate to Work section"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("work");
                  }}
                >
                  Work
                </a>
              </li>
              <li>
                <a
                  href="#product"
                  className="hover:underline"
                  aria-label="Navigate to Expertise section"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("product");
                  }}
                >
                  Service
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:underline"
                  aria-label="Navigate to About section"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("about");
                  }}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:underline"
                  aria-label="Navigate to Contact section"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("contact");
                  }}
                >
                  Contact
                </a>
              </li>
            </>
          ) : (
            <>
              <li>
                <a
                  href="/#work"
                  className="hover:underline"
                  aria-label="Navigate to Work section on landing page"
                >
                  Work
                </a>
              </li>
              <li>
                <a
                  href="/#product"
                  className="hover:underline"
                  aria-label="Navigate to Expertise section on landing page"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/#about"
                  className="hover:underline"
                  aria-label="Navigate to About section on landing page"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/#contact"
                  className="hover:underline"
                  aria-label="Navigate to Contact section on landing page"
                >
                  Contact
                </a>
              </li>
            </>
          )}
        </ul>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="focus:outline-none z-50 md:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-8 h-8 text-white"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-60 bg-primary-light text-white z-40 flex flex-col items-center justify-center space-y-8">
          <ul className="space-y-4 text-center text-2xl">
            {isMainPage ? (
              <>
                <li>
                  <a
                    href="#work"
                    onClick={() => setIsMenuOpen(false)}
                    className="hover:underline"
                  >
                    Work
                  </a>
                </li>
                <li>
                  <a
                    href="#product"
                    onClick={() => setIsMenuOpen(false)}
                    className="hover:underline"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    onClick={() => setIsMenuOpen(false)}
                    className="hover:underline"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    onClick={() => setIsMenuOpen(false)}
                    className="hover:underline"
                  >
                    Contact
                  </a>
                </li>
              </>
            ) : (
              <>
                <li>
                  <a
                    href="/#work"
                    onClick={() => setIsMenuOpen(false)}
                    className="hover:underline"
                  >
                    Work
                  </a>
                </li>
                <li>
                  <a
                    href="/#product"
                    onClick={() => setIsMenuOpen(false)}
                    className="hover:underline"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="/#about"
                    onClick={() => setIsMenuOpen(false)}
                    className="hover:underline"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/#contact"
                    onClick={() => setIsMenuOpen(false)}
                    className="hover:underline"
                  >
                    Contact
                  </a>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
