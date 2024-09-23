import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useData } from "./DataProvider";
import { BackButton } from "./BackButton";

export const RegionDetails = () => {
  const { regionNumber } = useParams();
  const navigate = useNavigate();
  const { regionsData, loading, error } = useData();

  const handleClubClick = (clubName) => {
    const club = clubName.split("of ")[1];
    navigate(`/region/${regionNumber}/${encodeURIComponent(club)}`);
  };

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (error)
    return <div className="text-center mt-10 text-red-500">{error}</div>;

  const clubs = regionsData.filter(
    (club) => club.region.toLowerCase() === `region ${regionNumber}`
  );

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-gray-800 rounded-lg shadow-xl">
      <div className="flex items-center justify-between mb-6">
        <BackButton />
        <h2 className="text-2xl md:text-3xl font-bold text-white flex-grow text-center">
          Region {regionNumber.toUpperCase()} Clubs
        </h2>
        <div className="w-16"></div>
      </div>
      {clubs.length === 0 ? (
        <p className="text-center text-gray-300">
          No clubs found for this region.
        </p>
      ) : (
        <div className="space-y-4">
          {clubs.map((club, index) => (
            <div
              key={index}
              onClick={() => handleClubClick(club.club_name)}
              className="bg-gray-700 hover:bg-gray-600 hover:scale-105 transition duration-300 rounded-lg shadow-lg overflow-hidden cursor-pointer"
            >
              <div className="px-6 py-4">
                <h3 className="text-base md:text-xl font-semibold text-white">
                  {club.club_name}
                </h3>
                <p className="text-sm">Click to view members</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
