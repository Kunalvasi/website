// src/pages/announcement/AnnouncementPage.js

import React from "react";
import "./AnnouncementPage.css";

const AnnouncementPage = () => {
  return (
    <div className="announcement-page">
      <div className="announcement-header">
        <h1>Latest Announcements</h1>
      </div>
      <div className="announcement-list">
        {/* Announcement Item Example */}
        <div className="announcement-item">
          <h2>New Feature Release: Dark Mode</h2>
          <p>
            We're excited to introduce a new dark mode option for our
            application, making it easier on your eyes during night-time usage.
          </p>
          <span className="announcement-date">September 5, 2024</span>
        </div>
        {/* Add more announcements here */}
      </div>
    </div>
  );
};

export default AnnouncementPage;
