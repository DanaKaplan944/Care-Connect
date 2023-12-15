import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Home from "../components/Home.jsx";

const HomePage = () => {
  return (
    <div className="homeContainer">
      <p>Care Connect</p>
      <Home />
    </div>
  );
};

export default HomePage;
