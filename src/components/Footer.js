import React from "react";

const Footer = () => (
  <footer className="bg-secondary-light text-white py-4">
    <div className="container mx-auto text-center">
      <p>© 2024 DOAD. All rights reserved.</p>
      <div className="flex justify-center space-x-4 mt-2">
        {/* Repeat for each social icon */}
        <a href="https://www.youtube.com/channel/UClnasVkidk9vqkObszisnfg" target="_blank" className="fa-brands fa-youtube text-gray-400 hover:text-white"/>
        <a href="https://www.linkedin.com/company/doadlive/" target="_blank" className="fa-brands fa-linkedin text-gray-400 hover:text-white"/>
      </div>
    </div>
  </footer>
);

export default Footer;
