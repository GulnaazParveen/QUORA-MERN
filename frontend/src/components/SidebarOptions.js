import React from "react";
import "./css/SidebarOptions.css";

const SidebarOptions = ({ imageUrl, title }) => {
  return (
    <div className="spaceCards">
      <div className="space-card">
        <img
          src={imageUrl}
          alt={title}
          style={{ width: "20%", height: "50%" }}
        />
        <p>{title}</p>
      </div>
    </div>
  );
};

export default SidebarOptions;
