import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const ClubDetails = () => {
  const { clubName } = useParams();
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await fetch(
          "https://script.googleusercontent.com/macros/echo?user_content_key=lJQD8ion2k-qs6fynEdA8zQwom1kAxSAW5srTxBpzz8E94GTgdGROzjAAkt0EoXkYET5yNGS6CoDzxlsPKMhOaKr_bwRbw5AOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHa0eoWE3HqFdUdcSM8B3pSECv02xugclnZScSAjZ-6leRLLUUlpYwhh4QMQr-RgqBCsTVA31GsbVKgO_HrhnL41IaseSPvt6H4_ekoa_Y_UXNgzBIrM_fen716LbejRbPYw&lib=MnVhB9O8MzIxKUgXOpDLlNsT0oKwtHH8b"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        const clubMembers = data.filter(
          (member) => member.club_name === decodeURIComponent(clubName)
        );
        setMembers(clubMembers);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch member data");
        setLoading(false);
      }
    };

    fetchMembers();
  }, [clubName]);

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (error)
    return <div className="text-center mt-10 text-red-500">{error}</div>;

  console.log({ clubName });
  console.log({ members });

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
