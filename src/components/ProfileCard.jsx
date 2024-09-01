import React from 'react';

const ProfileCard = ({ member }) => {
  const getInitials = (name) => {
    if (!name) return '';
    const names = name.split(' ');
    const initials = names.map((n) => n[0]).join('');
    return initials.toUpperCase();
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-md">
      <div className="flex items-center space-x-4">
        <div className="bg-blue-500 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
          <span className="text-xl font-bold text-white">{getInitials(member.full_name)}</span>
        </div>
        <div className="flex-grow">
          <h2 className="text-lg font-bold text-gray-800">{member.full_name.toUpperCase()}</h2>
          <p className="text-sm text-gray-600">{member.position}</p>
        </div>
      </div>
      <div className="mt-4 space-y-2 text-sm">
        <p><span className="font-semibold">Membership Id:</span> {member.membership_id}</p>
        <p><span className="font-semibold">Address:</span> {member.address}</p>
        <p><span className="font-semibold">Email:</span> {member.email}</p>
        <p><span className="font-semibold">Blood Group:</span> {member.blood_group}</p>
      </div>
    </div>
  );
};

export default ProfileCard;