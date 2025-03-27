import React from "react";
import styles from "../styles/AnimalCard.module.css";

const AnimalCard = ({ name, population, habitat }) => {
  return (
    <div className={styles.card}>
      <h2>{name}</h2>
      <p>Population: {population}</p>
      <p>Habitat: {habitat}</p>
    </div>
  );
};

export default AnimalCard;
