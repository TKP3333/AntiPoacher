import React, { useState } from "react";
import "./../styles/Alerts.css";
import { FaExclamationTriangle, FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const Alerts = () => {
  const [alerts, setAlerts] = useState([
    { id: 1, type: "critical", message: "Sound Detected, Time: 12:39 PM, Severity: High-Risk" },
    { id: 2, type: "warning", message: "Motion Detected Time, Time: 12:37 PM, Severity: Suspicious" },
    { id: 3, type: "safe", message: "Animal Movement, Time: 12:35 PM, Severity: Normal" },
  ]);

  const dismissAlert = (id) => {
    setAlerts(alerts.filter(alert => alert.id !== id));
  };

  return (
    <div className="alerts-container">
      <h2>⚠️ Live Alerts</h2>
      {alerts.length === 0 ? (
        <p className="no-alerts">✅ No active alerts</p>
      ) : (
        alerts.map((alert) => (
          <div key={alert.id} className={`alert-card ${alert.type}`}>
            <div className="alert-icon">
              {alert.type === "critical" && <FaTimesCircle className="critical-icon" />}
              {alert.type === "warning" && <FaExclamationTriangle className="warning-icon" />}
              {alert.type === "safe" && <FaCheckCircle className="safe-icon" />}
            </div>
            <div className="alert-content">
              <p>{alert.message}</p>
              <span className="alert-time">{alert.time}</span>
            </div>
            <button className="dismiss-btn" onClick={() => dismissAlert(alert.id)}>✖</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Alerts;
