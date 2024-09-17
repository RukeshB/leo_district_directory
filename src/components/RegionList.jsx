import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const RegionList = () => {
  const navigate = useNavigate();
  const [regions, setRegions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRegions = async () => {
      try {
        const response = await fetch('https://script.googleusercontent.com/macros/echo?user_content_key=2qCbl6tpbZt9qg7lhSftKH2d0CP-X45B04OxvHFogQhSv3K5O8j1yKUb32isPhfrAJYj16OhhEADzxlsPKMhOWXg20y2eThIOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHa0eoWE3HqFdUdcSM8B3pSECv02xugclnZScSAjZ-6leRLLUUlpYwhh4QMQr-RgqBCsTVA31GsbVKgO_HrhnL41IaseSPvt6H4_ekoa_Y_UXNx_Z8G_CAwKtBnqhBvwNYrcgQH-NwAMD_&lib=MnVhB9O8MzIxKUgXOpDLlNsT0oKwtHH8b');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const uniqueRegions = [...new Set(data.map(item => item.region))];
        setRegions(uniqueRegions);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch region data');
        setLoading(false);
      }
    };

    fetchRegions();
  }, []);

  const handleRegionClick = (region) => {
    const regionNumber = region.split(" ")[1].toLowerCase();
    navigate(`region/${regionNumber}`);
  };

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (error) return <div className="text-center mt-10 text-red-500">{error}</div>;

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-gray-800 rounded-lg shadow-xl">
      <h2 className="text-3xl font-bold mb-6 text-center text-white">
        Select a Region
      </h2>
      {regions.length === 0 ? (
        <p className="text-center text-gray-300">No regions found.</p>
      ) : (
        <div className="space-y-4">
          {regions.map((region) => (
            <div
              key={region}
              onClick={() => handleRegionClick(region)}
              className="bg-blue-600 hover:bg-blue-700 transition-colors duration-300 rounded-lg shadow-lg overflow-hidden cursor-pointer"
            >
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-white">{region}</div>
                <p className="text-blue-200 text-sm">Click to view details</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};