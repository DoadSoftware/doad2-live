import React from "react";

const Footer = () => (
  <footer className="bg-secondary-light text-white py-4">
    <div className="container mx-auto text-center">
      <p>© 2024 DOAD. All rights reserved.</p>
      <div className="flex justify-center space-x-4 mt-2">
        <a href="https://www.youtube.com/channel/UClnasVkidk9vqkObszisnfg"target="_blank"rel="noopener noreferrer"className="fa-brands fa-youtube"style={{ color: '#FF0000', fontSize: '1.6rem' }} />
        <a href="https://www.linkedin.com/company/doadlive/"  target="_blank" rel="noopener noreferrer" className="fa-brands fa-linkedin"   style={{ color: '#0077B5', fontSize: '1.6rem' }} />
      </div>
    </div>
  </footer>
);

export default Footer;
