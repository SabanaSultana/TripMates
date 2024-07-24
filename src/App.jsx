import Home from "./pages/Home/Home";
import Box from "./components/Box/Box";
import { Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact/Contact";
import React from "react";

function App() {
  return (
    <div >
      <Routes>
        <Route path='/' element={
          <React.Fragment>
            <Home/>
            <Box/>
          </React.Fragment>
        } />
        <Route path="/contact" element={<Contact/>}/>
      </Routes>  
    </div>
  );
}

export default App;
