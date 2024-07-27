// DestinationItem.jsx
import React from "react";
import "./DestinationItem.css"; // Assuming you have CSS for styling

const DestinationItem = ({
  title,
  image,
  location,
  brief_description,
  date,
  price,
}) => {
  return (
    <div className="destination-item">
      <img src={image} alt={title} className="destination-image" />
      <h3>{title}</h3>
      <p>{location}</p>
      <p>{brief_description}</p>
      <p>Date: {date}</p>
      <p>Price: ${price}</p>
    </div>
  );
};

export default DestinationItem;
