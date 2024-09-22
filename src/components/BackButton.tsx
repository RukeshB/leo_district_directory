import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const BackButton = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <button
      onClick={handleBack}
      className="bg-white text-blue-600  px-4 py-1 md:px-6 md:py-2 rounded-lg hover:bg-blue-100 transition-colors"
    >
      Back
    </button>
  );
};
