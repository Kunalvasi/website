import React, { useState } from "react";
import "./Sidebar.css";
import { FaHome, FaUser, FaServicestack, FaEnvelope } from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <ul className="sidebar-links">
        <li>
          <a href="#home">
            <FaHome />
            <span>Home</span>
          </a>
        </li>
        <li>
          <a href="#about">
            <FaUser />
            <span>About</span>
          </a>
        </li>
        <li>
          <a href="#services">
            <FaServicestack />
            <span>Services</span>
          </a>
        </li>
        <li>
          <a href="#contact">
            <FaEnvelope />
            <span>Contact</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
