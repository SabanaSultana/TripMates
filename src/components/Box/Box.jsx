// Box.jsx
import React, { useState } from "react";
import "./Box.css";

const Box = ({ onSearch }) => {
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [price, setPrice] = useState("");

  const handleSearchClick = () => {
    const params = { location, date, price };
    localStorage.setItem("searchParams", JSON.stringify(params));
    onSearch(params);
  };

  return (
    <div className="box-container">
      <div className="box-item">
        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          name="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter location"
          required
        />
      </div>
      <div className="box-item">
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          name="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <div className="box-item">
        <label htmlFor="price">Maximum Price Range:</label>
        <input
          type="text"
          id="price"
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Enter Maximum Price"
          required
        />
      </div>
      <button className="search-button" onClick={handleSearchClick}>
        Search
      </button>
    </div>
  );
};

export default Box;
