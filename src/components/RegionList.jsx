import React from "react";
import { useNavigate } from "react-router-dom";
import { useData } from "./DataProvider";

export const RegionList = () => {
  const navigate = useNavigate();
  const { regionsData, loading, error } = useData();

  const handleRegionClick = (region) => {
    const regionNumber = region.split(" ")[1].toLowerCase();
    navigate(`region/${regionNumber}`);
  };

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (error)
    return <div className="text-center mt-10 text-red-500">{error}</div>;

  const uniqueRegions = [...new Set(regionsData?.map((item) => item.region))];

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-gray-800 rounded-lg shadow-xl">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-white">
        Select a Region
      </h2>
      {uniqueRegions.length === 0 ? (
        <p className="text-center text-gray-300">No regions found.</p>
      ) : (
        <div className="space-y-4">
          {uniqueRegions.map((region) => (
            <div
              key={region}
              onClick={() => handleRegionClick(region)}
              className="bg-gray-700 hover:bg-gray-600 hover:scale-105 transition duration-300 rounded-lg shadow-lg overflow-hidden cursor-pointer"
            >
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-white">
                  {region}
                </div>
                <p className="text-sm">Click to view details</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
