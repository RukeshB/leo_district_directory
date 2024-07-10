import React from 'react';
import { Card, CardBody, Typography } from '@material-tailwind/react';

const ProfileCard = (props) => {
  
  const getInitials = (name) => {
    if (!name) return '';
    const names = name.split(' ');
    const initials = names.map((n) => n[0]).join('');
    return initials.toUpperCase();
  };

  return (
    <Card className="w-full mx-auto bg-white text-black shadow-md">
      <CardBody className="flex items-center space-x-4 p-6">
        <div className="bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center">
          <span className="text-2xl font-bold">{getInitials(props.member.full_name)}</span>
        </div>
        <div>
          <Typography variant="h5" className="font-semibold">
            {props.member.full_name.toUpperCase()}
          </Typography>
          <Typography variant="lead" className="text-gray-800">
            {props.member.poisiton}
          </Typography>
          <Typography>
          <span className="font-bold">Membership Id: </span>{props.member.membership_id}
        </Typography>
        {/* <Typography>
          <span className="font-bold">Address: </span>{props.member.address}
        </Typography> */}
        <Typography>
          <span className="font-bold">Email: </span>{props.member.email}
        </Typography>
        {/* <Typography>
          <span className="font-bold">Phone: </span>{props.member.phone}
        </Typography> */}
        <Typography>
          <span className="font-bold">Blood Group: </span>{props.member.blood_group}
        </Typography>
        </div>
      </CardBody>
    </Card>
  );
};

export default ProfileCard;
