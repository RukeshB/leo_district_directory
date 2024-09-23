import React from "react";
import { useParams } from "react-router-dom";
import { useData } from "./DataProvider";
import { BackButton } from "./BackButton";
import { Mail, Phone, Droplet, IdCard, MapPin } from "lucide-react";

export const ClubDetails = () => {
  const { clubName } = useParams();
  const { membersData, loading, error } = useData();

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (error)
    return <div className="text-center mt-10 text-red-500">{error}</div>;

  const members = membersData.filter(
    (member) => member.club_name.toLowerCase() === decodeURIComponent(clubName).toLowerCase()
  );

  const getRandomColor = () => {
    const colors = [
      "bg-blue-500",
      "bg-green-500",
      "bg-yellow-500",
      "bg-red-500",
      "bg-purple-500",
      "bg-pink-500",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const getDicebearAvatar = (name) => {
    const encodedName = encodeURIComponent(name);
    return `https://api.dicebear.com/9.x/thumbs/svg?seed=${encodedName}`;
  };

  return (
    <div className="max-w-6xl mx-auto mt-10 p-6 bg-gray-800 rounded-lg shadow-xl">
      <div className="flex items-center justify-between mb-10">
        <BackButton />
        <h2 className="text-lg md:text-3xl font-bold text-white flex-grow text-center">
          {decodeURIComponent(clubName)}
        </h2>
        <div className="w-16"></div>
      </div>
      {members.length === 0 ? (
        <p className="text-center text-gray-300 text-xl">
          No members found for this club.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member, index) => {
            return (
              <div
                key={index}
                className="bg-gray-700 hover:bg-gray-600 hover:scale-105 rounded-lg shadow-lg transform transition duration-300"
              >
                <div className="px-6 py-4">
                  <div className="flex items-center mb-4">
                    <img
                      src={getDicebearAvatar(member.full_name)}
                      alt={`Avatar for ${member.full_name}`}
                      className="w-16 h-16 rounded-full mr-4"
                    />
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold text-white"> Leo {member.full_name} </h3>
                      <h3 className="text-base text-gray-300"> {member.poisiton} </h3>
                    </div>
                  </div>
                  <p className="text-gray-300 flex items-center mb-2">
                    <Mail className="mr-2" size={18} /> {member.email ? member.email : "-"}
                  </p>
                  <p className="text-gray-300 flex items-center mb-2">
                    <Phone className="mr-2" size={18} /> {member.phone ? member.phone : "-"}
                  </p>
                  <p className="text-gray-300 flex items-center mb-2">
                    <Droplet className="mr-2" size={18} /> {member.blood_group ? member.blood_group : "-"}
                  </p>
                  <p className="text-gray-300 flex items-center mb-2">
                    <IdCard className="mr-2" size={18} /> {member.membership_id ? member.membership_id : "-"}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
