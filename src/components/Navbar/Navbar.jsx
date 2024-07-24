import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { MdModeOfTravel } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <div className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="logo">
        <h1>
          <MdModeOfTravel className="icon" />
          TripMates
        </h1>
      </div>
      <div className={`navitems ${isOpen ? "open" : ""}`}>
        <ul className="navlists">
          <li className="navitem">
            <a href="#" className="navlink" onClick={closeNavbar}>
              Home
            </a>
          </li>
          <li className="navitem">
            <a href="#" className="navlink" onClick={closeNavbar}>
              Packages
            </a>
          </li>
          <li className="navitem">
            <a href="#" className="navlink" onClick={closeNavbar}>
              MyDestinations
            </a>
          </li>
          <li className="navitem">
            <a href="#" className="navlink" onClick={closeNavbar}>
              About
            </a>
          </li>
          <li className="navitem">
            <a href="#" className="navlink" onClick={closeNavbar}>
              Contact Us
            </a>
          </li>
          <button className="btn mx-2">
            <a href="#" onClick={closeNavbar}>
              Book Now
            </a>
          </button>
          <button className="btn mx-3">
            <a href="#" onClick={closeNavbar}>
              SignUp
            </a>
          </button>
        </ul>
        <div className="closeNavbar" onClick={closeNavbar}>
          <AiFillCloseCircle className="icon" />
        </div>
      </div>
      <div className="toggleNavbar" onClick={toggleNavbar}>
        {isOpen ? <AiFillCloseCircle className="icon" /> : <RxHamburgerMenu />}
      </div>
    </div>
  );
};

export default Navbar;
