// AllDestinations.jsx
import React, { useState, useEffect } from "react";
import destinationData from "./Data"; // Adjust the path as necessary
import Box from "../Box/Box";
import DestinationItem from "./DestinationItem";
import "./AllDestinations.css";

const AllDestinations = () => {
  const [filteredData, setFilteredData] = useState(destinationData);

  useEffect(() => {
    const storedParams = JSON.parse(localStorage.getItem("searchParams")) || {};
    filterData(storedParams);
  }, []);

  const filterData = (params) => {
    const { location, date, price } = params;

    const filtered = destinationData.filter((destination) => {
      return (
        (location
          ? destination.title.toLowerCase().includes(location.toLowerCase())
          : true) &&
        (date ? destination.date === date : true) &&
        (price ? destination.price <= parseFloat(price) : true)
      );
    });

    setFilteredData(filtered.length ? filtered : []);
  };

  const handleSearch = (params) => {
    filterData(params);
  };

  return (
    <div className="all-destinations">
      <Box onSearch={handleSearch} />
      <div className="cards-container">
        {filteredData.length ? (
          filteredData.map((destination) => (
            <DestinationItem key={destination.id} {...destination} />
          ))
        ) : (
          <p className="no-data-message">Sorry, no data found.</p>
        )}
      </div>
    </div>
  );
};

export default AllDestinations;
