import React from "react";
import logo from "../assets/logos/internaltional_leo_logo.png";

export const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <nav className="container mx-auto flex items-center">
        <a href="/" className="text-2xl font-bold flex items-center">
          <img src={logo} alt="Leo Logo" className="h-10 w-auto mr-2" />
        </a>
        <div className="w-full text-center text-lg md:text-2xl flex items-center justify-between">
          <h1 className="flex-grow">LEO DISTRICT COUNCIL 325 G</h1>
        </div>
      </nav>
    </header>
  );
};
