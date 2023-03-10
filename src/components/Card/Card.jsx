import React from "react";
import styles from "./Card.module.css"

export default function Card(props) {
   return (
      <div className={styles.card}>
        <img className={styles.image} src={props.image} alt="" />
        <button className={styles.close} onClick={props.onClose}>x</button>
        <div className={styles.datos}> 
          <p className={styles.name}>{props.name}</p>
          <p className={styles.species}>{props.species}</p>
          <p className={styles.gender}>{props.gender}</p>
        </div>
      </div>
   );
}
