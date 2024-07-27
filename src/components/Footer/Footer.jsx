import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { AiFillMessage } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="company-info">
        <h2>Company Info</h2>
        <p>
          A good plus of traveling is that often you get new skills without
          difficulty and without even noticing it.
        </p>
        <img src="" alt="company image" />
      </div>
      <div className="contatcs">
        <h2>Contacts</h2>
        <div className="phone"></div>
        <div className="location"></div>
        <div className="time"></div>
        <div className="icons">
          <FaFacebook />
          <FaSquareXTwitter />
          <AiFillMessage />
          <FaInstagramSquare />
        </div>
      </div>
      <div className="recent-trips">
        <img
          src="https://travelogyindia.b-cdn.net/blog/wp-content/uploads/2014/02/delhi.jpg"
          alt=""
        />
        <img
          src="https://www.bruisedpassports.com/wp-content/uploads/2021/12/Bruised-PAssports-Meghalaya-Trip-Itinerary-5.jpg"
          alt=""
        />
        <img
          src="https://www.tourmyindia.com/blog//wp-content/uploads/2023/02/Kerala-Backwater-Tour-Guide.jpg"
          alt=""
        />
        <img
          src="https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2024/07/18131859/Feature-Tamhini-Ghat-near-Mulshi-Neelkanth-Kadam-Shutterstock-1600x900.jpg"
          alt=""
        />
        <img
          src="https://t4.ftcdn.net/jpg/01/15/85/15/360_F_115851548_3GwbMcuEjjLkmO5kUkchWt2wvGNeDxY7.jpg"
          alt=""
        />
        <img
          src="https://media2.thrillophilia.com/images/photos/000/383/699/original/1651645541_shutterstock_1662357571.jpg?w=753&h=450&dpr=1.5"
          alt=""
        />
      </div>
    </div>
  );
}

export default Footer
