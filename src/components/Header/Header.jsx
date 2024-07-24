import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <h2>Plan Your Trip With</h2>
      <h1>GoTrips</h1>
      <p>"Travel to your favourite city with respectful of the environment"</p>
      <button>
        <a href="#">Explore Now</a>
      </button>
    </div>
  );
};

export default Header;
