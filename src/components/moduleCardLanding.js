import React from "react";

const ModuleCard = ({ image, title, subtitle, description }) => {
  return (
    <div className="col-md-4">
      <div className="module-card">
        <div className="card-inner">
          <div className="card-front">
            <img src={image} alt={title} className="card-image" />
            <h5 className="card-title">{title}</h5>
            <p className="card-subtitle">{subtitle}</p>
          </div>
          <div className="card-back">
            <img src={image} alt={title} className="card-image" />
            <p className="card-description">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModuleCard;
