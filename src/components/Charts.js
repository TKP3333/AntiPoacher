import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import "./../styles/Charts.css";

// Registering required components for Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Charts = () => {
  const [sensorData, setSensorData] = useState({
    labels: ["0s", "5s", "10s", "15s", "20s", "25s"],
    datasets: [
      {
        label: "Camera Sensor Activity",
        data: [20, 22, 25, 27, 23, 26],
        borderColor: "#ff5733",
        backgroundColor: "rgba(255, 87, 51, 0.3)",
        borderWidth: 2,
        tension: 0.4,
      },
      {
        label: "Microphone Sensor Activity",
        data: [18, 19, 21, 23, 22, 24],
        borderColor: "#337bff",
        backgroundColor: "rgba(51, 123, 255, 0.3)",
        borderWidth: 2,
        tension: 0.4,
      },
      {
        label: "LoRaWAN Module Activity",
        data: [10, 12, 14, 15, 13, 16],
        borderColor: "#32a852",
        backgroundColor: "rgba(50, 168, 82, 0.3)",
        borderWidth: 2,
        tension: 0.4,
      },
    ],
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setSensorData((prevData) => {
        const newLabels = prevData.labels.slice(1);
        newLabels.push(`${parseInt(newLabels[newLabels.length - 1]) + 5}s`);

        const newData = prevData.datasets.map((dataset) => ({
          ...dataset,
          data: [...dataset.data.slice(1), Math.floor(Math.random() * 10) + 20],
        }));

        return { labels: newLabels, datasets: newData };
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="chart-container">
      <h2>📊 Sensor Activity Over Time</h2>
      <Line data={sensorData} options={{ responsive: true, maintainAspectRatio: false }} />

    </div>
  );
};

export default Charts;
