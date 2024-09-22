import React, { useState, useEffect } from "react";
import CustomSpinner from "./CustomSpinner";
import { RegionList } from "./RegionList";

const FetchData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://script.google.com/macros/s/AKfycby3Qq2Ite4cLp_ficcZUVtt9qBVXGkzL6hclnqSwlNW8RwN5v1KRMo3CXZtaR6aWuGZcw/exec?sheetName=club_details"
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
    <div className="opacity-90">
      <RegionList data={data} />
    </div>
  );
};

export default FetchData;