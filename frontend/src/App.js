import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import GardenSetup from "./pages/GardenSetup";
import Dashboard from "./pages/Dashboard";
import MyGarden from "./pages/MyGarden";
import PlantingCalendar from "./pages/PlantingCalendar";
import TaskManager from "./pages/TaskManager";
import PlantDiagnosis from "./pages/PlantDiagnosis";
import WeatherAlerts from "./pages/WeatherAlerts";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/garden-setup" element={<GardenSetup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/my-garden" element={<MyGarden />} />
          <Route path="/planting-calendar" element={<PlantingCalendar />} />
          <Route path="/task-manager" element={<TaskManager />} />
          <Route path="/plant-diagnosis" element={<PlantDiagnosis />} />
          <Route path="/weather-alerts" element={<WeatherAlerts />} />
          <Route path="/plant-database" element={<Dashboard />} />
          <Route path="/growth-tracking" element={<Dashboard />} />
          <Route path="/harvest-tracker" element={<Dashboard />} />
          <Route path="/community" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;