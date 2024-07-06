import { Avatar, Card, CardBody, Typography } from "@material-tailwind/react";
import React from "react";
import leo_logo from "../assets/logos/internaltional_leo_logo.png";

const UserProfileCard = (props) => {
  return (
    <Card className="w-80 md:w-96 p-1 md:p-2 text-center rounded-lg lg:mt-0">
      <CardBody className="space-y-4 lg:space-y-6">
        <Avatar
          src={leo_logo}
          alt="avatar"
          className="mx-auto rounded-full h-28 w-28 md:h-36 md:w-36"
        />
        <div className="space-y-2">
          <div className="flex justify-center items-center flex-col space-y-3 text-lg font-medium leading-6">
            <h3 className="text-xl md:text-2xl font-bold">
              Leo {props.member.full_name.toUpperCase()}
            </h3>
            <h3 className="text-xl md:text-2xl">
              {props.member.poisiton.toLowerCase()}
            </h3>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default UserProfileCard;
