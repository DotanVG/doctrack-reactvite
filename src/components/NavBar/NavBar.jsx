// NavBar.jsx
import React from "react";
import { Link } from "react-router-dom";
import DoctorIcon from "../../assets/uxwing-icons/female-doctor-icon.svg";
import AppointmentIcon from "../../assets/uxwing-icons/calendar-line-icon.svg";
import LocationIcon from "../../assets/uxwing-icons/address-location-icon.svg";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <Link to="/doctors" className="nav-item">
            <img src={DoctorIcon} className="icon" alt="Doctors" />
            <span className="link-text">Doctors</span>
          </Link>
        </li>
        <li>
          <Link to="/appointments" className="nav-item">
            <img src={AppointmentIcon} className="icon" alt="Appointments" />
            <span className="link-text">Appointments</span>
          </Link>
        </li>
        <li>
          <Link to="/map" className="nav-item">
            <img src={LocationIcon} className="icon" alt="Map" />
            <span className="link-text">Map</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
