import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/logos/internaltional_leo_logo.png";

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <header className="bg-blue-600 text-white p-4">
      <nav className="container mx-auto flex items-center">
        <a href="/" className="text-2xl font-bold flex items-center">
          <img src={logo} alt="Leo Logo" className="h-8 w-auto mr-2" />
        </a>
        <div className="w-full text-center text-2xl flex items-center justify-between">
          <h1 className="flex-grow">LEO DISTRICT COUNCIL 325 G</h1>
        </div>
        <div>
          {location.pathname !== "/" && (
            <button
              onClick={handleBack}
              className="bg-white text-blue-600 px-4 rounded-lg hover:bg-blue-100 transition-colors"
            >
              Back
            </button>
          )}
        </div>
      </nav>
    </header>
  );
};
