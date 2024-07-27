import Home from "./pages/Home/Home";
import Box from "./components/Box/Box";
import { Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact/Contact";
import React from "react";
import AllDestinations from "./components/DestinationItems/AllDestinations";
import Footer from "./components/Footer/Footer";
import Map from "./components/Footer/Map";
import About from "./pages/About/About";

function App() {
  return (
    <div >
      <Routes>
        <Route path='/' element={
          <React.Fragment>
            <Home/>
            <Box/>
            <AllDestinations/>
            <Map/>
            <Footer/>
          </React.Fragment>
        } />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>  

    </div>
  );
}

export default App;
