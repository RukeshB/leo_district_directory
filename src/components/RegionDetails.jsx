import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useData } from "./DataProvider";

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
      <h2 className="text-3xl font-bold mb-6 text-center text-white">
        Region {regionNumber.toUpperCase()} Clubs
      </h2>
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
              className="bg-blue-600 hover:bg-blue-700 transition-colors duration-300 rounded-lg shadow-lg overflow-hidden cursor-pointer"
            >
              <div className="px-6 py-4">
                <h3 className="text-xl font-semibold text-white">
                  {club.club_name}
                </h3>
                <p className="text-blue-200 text-sm">Click to view members</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};