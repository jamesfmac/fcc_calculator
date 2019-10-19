import React from "react";

import { ReactComponent as TailwindLogo } from "../images/tailwindcss-logo.svg";
import { ReactComponent as ReactLogo } from "../images/react-logo.svg";

const Footer = () => {
  return (
    <footer className="flex flex-col items-start justify-center bg-gray-400 w-screen pt-1 px-12 ">
      <div
        className="flex items-stretch content-center max-w-6xl"
       
      >
        <div className="flex flex-col justify-center font-mono text-gray-800 font-medium text-xs pr-4  ">
          <span>Powered by:</span>
        </div>
        <a href="http://reactjs.org" target="_blank" rel="noopener noreferrer">
            <div className="flex items-center justify-start h-8 logo">
              <ReactLogo />
            </div>
        </a>
        <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer">
            <div className="flex content-center items-center justify-start h-8 logo ">
              <TailwindLogo />
            </div>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
