import React from "react";
import "./Box.css";

const Box = () => {
  return (
    <div className="box-container">
      <div className="box-item">
        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          name="location"
          placeholder="Enter location"
        />
      </div>
      <div className="box-item">
        <label htmlFor="date">Date:</label>
        <input type="date" id="date" name="date" placeholder="Select date" />
      </div>
      <div className="box-item">
        <label htmlFor="price">Price Range:</label>
        <input
          type="text"
          id="price"
          name="price"
          placeholder="Enter Maxium Price"
        />
      </div>
      <button className="search-button">Search</button>
    </div>
  );
};

export default Box;
