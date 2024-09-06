import React from "react";
import "./Card.css"; // Importing CSS file

const Card = ({ image, title, author, description, link }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt={title} />
      </div>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-author">By {author}</p>
        <p className="card-description">{description}</p>
      </div>
      <div className="card-footer">
        <a
          href={link}
          className="card-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read Now
        </a>
      </div>
    </div>
  );
};

export default Card;
