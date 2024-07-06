import React from 'react';
import { Card, CardBody, Typography } from '@material-tailwind/react';

const ProfileCard = () => {
  return (
    <Card className="max-w-md mx-auto bg-white text-black shadow-md">
      <CardBody className="flex items-center space-x-4 p-6">
        <div className="bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center">
          <span className="text-2xl font-bold">KP</span>
        </div>
        <div>
          <Typography variant="h5" className="font-semibold">
            Kamal Pandey
          </Typography>
          <Typography variant="small" className="text-gray-500">
            Lead Engineer
          </Typography>
        </div>
      </CardBody>
      <CardBody className="p-6 pt-0">
        <Typography>
          <span className="font-bold">Location: </span>Nepal
        </Typography>
        <Typography>
          <span className="font-bold">Department: </span>Engineering
        </Typography>
        <Typography>
          <span className="font-bold">Email: </span>kamal@fleetpanda.com
        </Typography>
      </CardBody>
    </Card>
  );
};

export default ProfileCard;
