// NavBar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import DocTrackLogo from "../../assets/logos/doc-track-logo.svg";
import DoctorIcon from "../../assets/uxwing-icons/female-doctor-icon.svg";
import AppointmentIcon from "../../assets/uxwing-icons/calendar-line-icon.svg";
import LocationIcon from "../../assets/uxwing-icons/address-location-icon.svg";
import "./NavBar.css";

function NavBar() {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const closeMenu = () => {
    setIsNavVisible(false);
  };

  return (
    <nav className="navbar">
      <button className="hamburger" onClick={() => setIsNavVisible(!isNavVisible)}>
        &#9776; {/* Hamburger Icon */}
      </button>
      <ul className={`nav-links ${isNavVisible ? 'show' : ''}`}>
        <li>
          <Link to="/" className="nav-item main-logo" onClick={closeMenu}>
            <img src={DocTrackLogo} className="icon" alt="DocTrack Logo" />
            <span className="link-text main-logo-text">DocTrack</span>
          </Link>
        </li>
        <li>
          <Link to="/doctors" className="nav-item" onClick={closeMenu}>
            <img src={DoctorIcon} className="icon" alt="Doctors" />
            <span className="link-text">Doctors</span>
          </Link>
        </li>
        <li>
          <Link to="/appointments" className="nav-item" onClick={closeMenu}>
            <img src={AppointmentIcon} className="icon" alt="Appointments" />
            <span className="link-text">Appointments</span>
          </Link>
        </li>
        <li>
          <Link to="/map" className="nav-item" onClick={closeMenu}>
            <img src={LocationIcon} className="icon" alt="Map" />
            <span className="link-text">Map</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
