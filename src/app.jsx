import React from "react";
import { Routes, Route } from "react-router-dom";
import { RegionList } from "./components/RegionList";
import { RegionDetails } from "./components/RegionDetails";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ClubDetails } from "./components/clubDetails";

export function App() {
  return (
    <div className="flex flex-col min-h-screen text-white bg-gray-900">
      <Header />
      <main className="flex-grow mb-8">
        <Routes>
          <Route path="/" element={<RegionList />} />
          <Route path="/region/:regionNumber" element={<RegionDetails />} />
          <Route
            path="/region/:regionNumber/:clubName"
            element={<ClubDetails />}
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
