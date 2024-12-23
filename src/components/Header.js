import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

const Header = ({ className }) => {
  const location = useLocation();
  const isMainPage = location.pathname === '/';

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const updatedClassName = isMainPage ? className : "header-scrolled";

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  const [imageSrc, setImageSrc] = useState('./images/doad_logo_fulltext_white.png');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) { // sm breakpoint
        setImageSrc('./images/logo-white.png'); // Change to small image
      } else if (window.innerWidth < 768) { // md breakpoint
        setImageSrc('./images/doad_logo_fulltext_white.png'); // Change to medium image
      } else {
        setImageSrc('./images/doad_logo_fulltext_white.png'); // Default image
      }
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full text-white p-4 z-50 transition-all duration-500 ${updatedClassName}`}
      aria-label="Main Navigation"
    >
      <nav className="font-Montserrat container mx-auto flex justify-between items-center">
        {/* Brand Logo */}
        <div className="text-2xl font-bold">
          <img
            src={imageSrc}
            className="max-h-10 ml-7"
            alt="Doad Logo"
          />
        </div>

        {/* Desktop Menu */}
        {/*<ul className="hidden md:flex space-x-4">
          {isMainPage ? (
            <>
              <li>
                <a
                  href="#work"
                  className="hover:underline"
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
                  href="#product"
                  className="hover:underline"
                  aria-label="Navigate to Expertise section"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('product');
                  }}
                >
                  SERVICES
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:underline"
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
                  className="hover:underline"
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
                  className="hover:underline"
                  aria-label="Navigate to Work section on landing page"
                >
                  WORK
                </a>
              </li>
              <li>
                <a
                  href="/#product"
                  className="hover:underline"
                  aria-label="Navigate to Expertise section on landing page"
                >
                  SERVICES
                </a>
              </li>
              <li>
                <a
                  href="/#about"
                  className="hover:underline"
                  aria-label="Navigate to About section on landing page"
                >
                  ABOUT
                </a>
              </li>
              <li>
                <a
                  href="/#contact"
                  className="hover:underline"
                  aria-label="Navigate to Contact section on landing page"
                >
                  CONTACT
                </a>
              </li>
            </>
          )}
        </ul>/*}

        {/* Hamburger Menu Icon */}
        <div className="z-50">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8 text-white"
            >
              {isMenuOpen ? (
                // Cross Icon
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                  className='text-white'
                />
              ) : (
                // Hamburger Icon
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                  className='text-white'
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay (40% of the screen height) */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-[40%] bg-primary-light text-white z-40 flex flex-col items-center justify-center space-y-8">
          <ul className="space-y-8 text-center text-2xl">
            {isMainPage ? (
              <>
                <li>
                  <Link
                    href="/"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('work');
                      setIsMenuOpen(false); // Close menu on click
                    }}
                    className="hover:underline"
                  >
                    WORK
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('product');
                      setIsMenuOpen(false);
                    }}
                    className="hover:underline"
                  >
                    SERVICES
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('about');
                      setIsMenuOpen(false);
                    }}
                    className="hover:underline"
                  >
                    ABOUT US
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('contact');
                      setIsMenuOpen(false);
                    }}
                    className="hover:underline"
                  >
                    CONTACT US
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    href="/"
                    className="hover:underline"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    WORK
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="hover:underline"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    SERVICES
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="hover:underline"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    ABOUT US
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="hover:underline"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    CONTACT US
                  </Link>
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
