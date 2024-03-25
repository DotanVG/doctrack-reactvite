// AppRoutes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Login/LoginPage";
import DoctorsPage from "./pages/Doctors/DoctorsPage";
import AppointmentsPage from "./pages/Appointments/AppointmentsPage";
import MapPage from "./pages/Map/MapPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/doctors" element={<DoctorsPage />} />
      <Route path="/appointments" element={<AppointmentsPage />} />
      <Route path="/map" element={<MapPage />} />
    </Routes>
  );
}

export default AppRoutes;
