import React from "react";
import '../css/HeroSection.css';

const Footer = () => {
  return (
    <footer className="font-abc font-black footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <span>Pham.dev</span>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
