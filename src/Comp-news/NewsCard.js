import React from "react";
import "./NewsCard.css";

const NewsCard = ({ imageSrc, title, description,url }) => {
  return (
    <div className="card" >
      <img className="card-image" src={imageSrc} alt={title} />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <button className="read-more-button"><a href={url} />Read More</button>
      </div>
    </div>
  );
};

export default NewsCard;
