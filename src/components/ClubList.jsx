import React, { useState } from "react";
import { List, Card } from "@material-tailwind/react";
import BodContainer from "./BodContainer"; // Assuming both components are in the same directory

export function ClubList({ data }) {
  const [openIndex, setOpenIndex] = useState(null);

  const list = [...new Set(data.map((member) => member.club_name))].sort();

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <div className="text-center m-4">
        <h1 className="text-2xl md:text-6xl">Leo District Council 325 G</h1>
      </div>
      <Card className="w-full bg-gray-900">
        <List>
          {list.map((element, index) => (
            <BodContainer
              club={element}
              data={data}
              key={index}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
              isSelected={openIndex === index}
            />
          ))}
        </List>
      </Card>
    </div>
  );
}
