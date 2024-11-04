import React from "react";

function Footer() {
  return (
    <footer className="header-footer-background bg-darkCard border-t border-borderDark py-6 mt-10">
      <div className="container mx-auto text-center text-gray-200">
        <p className="mb-2">
          Data Provided by <a href="https://www.mmobomb.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">MMOBomb API</a>
        </p>
        <p className="mb-2">
          Created by <a href="https://github.com/GitHixy" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">GitHixy</a>
        </p>
        <p className="text-sm mt-4 text-gray-900">&copy; {new Date().getFullYear()} TheRealmFeed. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
