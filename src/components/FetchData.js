import React, { useState, useEffect } from "react";
import CustomSpinner from "./CustomSpinner";
import { ClubList } from "./ClubList";

const FetchData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://script.google.com/macros/s/AKfycbzjw_0LIFgvlrq-kzly82PmtOtWAtYbMhgDeZ824ZsGEDOji_mUTbby2sqvQ_TWWrREMQ/exec"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <CustomSpinner />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <ClubList data={data} />
    </div>
  );
};

export default FetchData;
