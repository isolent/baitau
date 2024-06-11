import React from 'react';
import './StageCard.css'; 

const StageCard = ({ title, image, description }) => {
  return (
    <div className="stage-card">
      <div className="stage-card__image" style={{ backgroundImage: `url(${image})` }}></div>
      <h2 className="stage-card__title">{title}</h2>
      <p className="stage-card__description">{description}</p>
    </div>
  );
};

export default StageCard;