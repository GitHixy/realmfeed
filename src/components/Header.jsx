import React from "react";
import { FaNewspaper, FaGift, FaGamepad } from "react-icons/fa";

function Header({ scrollToSection, refs }) {
  return (
    <header className="header-footer-background bg-darkCard border-b-4 border-accent shadow-lg py-4">
      <div className="container mx-auto flex justify-between items-center">
        
        <div className="flex items-center space-x-3">
          <h1 className="text-4xl font-bold text-accent tracking-widest select-none">
            TheRealm<span className="text-secondaryText">Feed</span>
          </h1>
          <span className="text-sm text-gray-200 italic">Your MMO Gateway</span>
        </div>

        
        <nav className="flex space-x-6 text-secondaryText">
          
          <button
            onClick={() => scrollToSection(refs.newsRef)}
            className="flex items-center space-x-2 hover:text-accent transition-colors duration-200"
          >
            <FaNewspaper />
            <span>News</span>
          </button>
          <button
            onClick={() => scrollToSection(refs.giveawaysRef)}
            className="flex items-center space-x-2 hover:text-accent transition-colors duration-200"
          >
            <FaGift />
            <span>Giveaways</span>
          </button>
          <button
            onClick={() => scrollToSection(refs.latestReleasesRef)}
            className="flex items-center space-x-2 hover:text-accent transition-colors duration-200"
          >
            <FaGamepad />
            <span>Latest Releases</span>
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;