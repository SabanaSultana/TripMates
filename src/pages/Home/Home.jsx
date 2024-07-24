import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Home.css";
import Header from "../../components/Header/Header";

const Home = () => {
  return (
    <div className="home">
      <img src="https://images.pexels.com/photos/1655166/pexels-photo-1655166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"></img>
      <div className="home-navbar">
        <Navbar />
      </div>
      <div className="home-header">
        <Header />
      </div>
    </div>
  );
};

export default Home;
