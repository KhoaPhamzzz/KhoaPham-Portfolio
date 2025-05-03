import React from "react";
import '../css/HeroSection.css';

const Footer = () => {
  return (
    <footer className="font-abc font-black border-t border-t-[#33353F] text-white bg-transparent relative">
      <div className="container mx-auto px-4 py-6 relative flex items-center justify-center">
        {/* Left-aligned text */}
        <span className="absolute left-4 text-lg">Pham.dev</span>

        {/* Centered text */}
        <p className="text-sm text-slate-400">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
