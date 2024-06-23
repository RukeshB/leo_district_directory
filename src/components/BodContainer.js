import React, { useRef } from "react";
import {
  Collapse,
  ListItem,
  Card,
  Typography,
  CardBody,
} from "@material-tailwind/react";

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
        {club}
      </ListItem>
      <Collapse open={isOpen}>
        <Card className="m-4 mx-auto w-full bg-gray-800 text-white">
          <CardBody>
            <Typography>
              <pre>{JSON.stringify(filteredData, null, 2)}</pre>
            </Typography>
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}