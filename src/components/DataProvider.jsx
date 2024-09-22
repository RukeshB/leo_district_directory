import React, { createContext, useContext, useState, useEffect } from "react";

const DataContext = createContext();

const REGIONS_API_URL =
  "https://script.googleusercontent.com/macros/echo?user_content_key=2qCbl6tpbZt9qg7lhSftKH2d0CP-X45B04OxvHFogQhSv3K5O8j1yKUb32isPhfrAJYj16OhhEADzxlsPKMhOWXg20y2eThIOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHa0eoWE3HqFdUdcSM8B3pSECv02xugclnZScSAjZ-6leRLLUUlpYwhh4QMQr-RgqBCsTVA31GsbVKgO_HrhnL41IaseSPvt6H4_ekoa_Y_UXNx_Z8G_CAwKtBnqhBvwNYrcgQH-NwAMD_&lib=MnVhB9O8MzIxKUgXOpDLlNsT0oKwtHH8b";
const MEMBERS_API_URL =
  "https://script.googleusercontent.com/macros/echo?user_content_key=1oCh-6vjdk1ZgOm_xENiGm7B_kCTY-9QFfPsfEnQzhUo_BVA13ya1oEdmiA8-V-qeNyQAc4jdQxz-iP45wJovwd_0m1g8FPPOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHa0eoWE3HqFdUdcSM8B3pSECv02xugclnZScSAjZ-6leRLLUUlpYwhh4QMQr-RgqBCsTVA31GsbVKgO_HrhnL41IaseSPvt6H4_ekoa_Y_UXNgzBIrM_fen716LbejRbPYw&lib=MnVhB9O8MzIxKUgXOpDLlNsT0oKwtHH8b";

export const DataProvider = ({ children }) => {
  const [regionsData, setRegionsData] = useState(null);
  const [membersData, setMembersData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cachedRegionsData = localStorage.getItem("cachedRegionsData");
        const cachedMembersData = localStorage.getItem("cachedMembersData");

        if (cachedRegionsData && cachedMembersData) {
          setRegionsData(JSON.parse(cachedRegionsData));
          setMembersData(JSON.parse(cachedMembersData));
          setLoading(false);
        } else {
          const [regionsResponse, membersResponse] = await Promise.all([
            fetch(REGIONS_API_URL),
            fetch(MEMBERS_API_URL),
          ]);

          if (!regionsResponse.ok || !membersResponse.ok) {
            throw new Error("One or more network responses were not ok");
          }

          const fetchedRegionsData = await regionsResponse.json();
          const fetchedMembersData = await membersResponse.json();

          setRegionsData(fetchedRegionsData);
          setMembersData(fetchedMembersData);

          localStorage.setItem(
            "cachedRegionsData",
            JSON.stringify(fetchedRegionsData)
          );
          localStorage.setItem(
            "cachedMembersData",
            JSON.stringify(fetchedMembersData)
          );

          setLoading(false);
        }
      } catch (error) {
        console.error("Failed to fetch data:", error);
        setError("Failed to fetch data");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ regionsData, membersData, loading, error }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};
