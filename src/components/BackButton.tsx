import { ArrowLeft } from "lucide-react";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const BackButton = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <ArrowLeft onClick={handleBack} className="text-white hover:text-blue-600 cursor-pointer"/>
  );
};
