import React from "react";

const ModuleCard = ({ image, title, subtitle, description }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card shadow-lg border-0 rounded-4">
        <img src={image} alt={title} className="card-img-top rounded-4" />
        <div className="card-body">
          <h5 className="card-title" style={{ color: "#234970" }}>
            <span className="fs-6">{title}</span> – {subtitle}
          </h5>
          <p className="card-text text-muted">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ModuleCard;
