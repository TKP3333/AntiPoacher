import React from "react";
import "./../styles/SensorData.css"; // Ensure correct CSS import

const SensorData = () => {
  // Dummy sensor data
  const sensorData = [
    {
      id: 1,
      type: "Raspberry Pi Camera",
      status: "Active",
      location: "Zone A",
      lastUpdated: "2025-03-25 12:30 PM",
      value: "Image Captured",
    },
    {
      id: 2,
      type: "Microphone",
      status: "Active",
      location: "Zone B",
      lastUpdated: "2025-03-25 12:35 PM",
      value: "Gunshot Detected",
    },
    {
      id: 3,
      type: "LoRaWAN",
      status: "Inactive",
      location: "Zone C",
      lastUpdated: "2025-03-25 12:28 PM",
      value: "No Signal",
    },
    {
      id: 4,
      type: "Motion Sensor",
      status: "Active",
      location: "Zone D",
      lastUpdated: "2025-03-25 12:40 PM",
      value: "Movement Detected",
    },
    {
      id: 5,
      type: "Thermal Camera",
      status: "Active",
      location: "Zone E",
      lastUpdated: "2025-03-25 12:45 PM",
      value: "Heat Signature Detected",
    },
  ];

  return (
    <div className="sensor-container">
      <h2>Sensor Data</h2>
      <table className="sensor-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Sensor Type</th>
            <th>Status</th>
            <th>Location</th>
            <th>Last Updated</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {sensorData.map((sensor) => (
            <tr key={sensor.id}>
              <td>{sensor.id}</td>
              <td>{sensor.type}</td>
              <td className={sensor.status === "Active" ? "active" : "inactive"}>
                {sensor.status}
              </td>
              <td>{sensor.location}</td>
              <td>{sensor.lastUpdated}</td>
              <td>{sensor.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SensorData;
