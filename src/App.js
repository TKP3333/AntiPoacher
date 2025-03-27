import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import SensorData from "./components/SensorData";
import Charts from "./components/Charts";
import Map from "./components/Map";
import Alerts from "./components/Alerts";
import "./styles/global.css"; // Import global styles

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="main-container">
          {/* Left Section: Sensor Data & Charts */}
          <div className="left-panel">
            <Alerts />
	    <SensorData />
          </div>

          {/* Right Section: Map & Alerts */}
          <div className="right-panel">
            <Map />
            <Charts />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
