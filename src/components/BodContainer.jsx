import React, { useRef } from "react";
import {
  Collapse,
  ListItem,
  Card,
  CardBody,
} from "@material-tailwind/react";
import UserProfileCard from "./UserProfileCard";

export default function BodContainer({
  club,
  data,
  isOpen,
  onToggle,
  isSelected,
}) {
  const listItemRef = useRef(null);

  const handleClick = () => {
    onToggle();
    listItemRef.current.focus();
  };

  const filteredData = data.filter((item) => item.club_name === club);

  return (
    <div className="block">
      <ListItem
        ref={listItemRef}
        onClick={handleClick}
        tabIndex={0}
        className={`cursor-pointer text-white hover:bg-gray-800 hover:text-white focus:bg-gray-800 focus:text-white ${
          isSelected ? "bg-gray-800" : "bg-gray-900"
        }`}
      >
        Leo Club of {club}
      </ListItem>
      <Collapse open={isOpen}>
        <Card className="m-4 mx-auto w-full bg-gray-800 text-white">
          <CardBody>
              {/* <pre>{JSON.stringify(filteredData, null, 2)}</pre> */}
              <div className="flex gap-3 md:flex-row flex-col">
                {
                  filteredData.map((element, index) => (
                    <UserProfileCard member={element} key={index}/>
                  ))
                }
              </div>
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}
