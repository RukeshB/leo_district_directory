import React from "react";
import { useParams } from "react-router-dom";
import { useData } from "./DataProvider";

export const ClubDetails = () => {
  const { clubName } = useParams();
  const { membersData, loading, error } = useData();

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (error)
    return <div className="text-center mt-10 text-red-500">{error}</div>;

  const members = membersData.filter(
    (member) => member.club_name === decodeURIComponent(clubName)
  );

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-gray-800 rounded-lg shadow-xl">
      <h2 className="text-3xl font-bold mb-6 text-center text-white">
        {decodeURIComponent(clubName)} Members
      </h2>
      {members.length === 0 ? (
        <p className="text-center text-gray-300">
          No members found for this club.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {members.map((member, index) => (
            <div key={index} className="bg-gray-700 p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-2">
                {member.full_name}
              </h3>
              <p className="text-gray-300">
                <strong>Position:</strong> {member.poisiton}
              </p>
              <p className="text-gray-300">
                <strong>Email:</strong> {member.email}
              </p>
              <p className="text-gray-300">
                <strong>Phone:</strong> {member.phone}
              </p>
              <p className="text-gray-300">
                <strong>Blood Group:</strong> {member.blood_group}
              </p>
              <p className="text-gray-300">
                <strong>Membership ID:</strong> {member.membership_id}
              </p>
              <p className="text-gray-300">
                <strong>Address:</strong> {member.address}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
