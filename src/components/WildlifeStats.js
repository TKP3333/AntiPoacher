import React from "react";
import styles from "../styles/WildlifeStats.module.css";

const WildlifeStats = () => {
  return (
    <div className={styles.stats}>
      <h2>Global Wildlife Statistics</h2>
      <p>Endangered Species: 41,415</p>
      <p>Extinct Species: 905</p>
      <p>Protected Areas: 250,000+</p>
    </div>
  );
};

export default WildlifeStats;
