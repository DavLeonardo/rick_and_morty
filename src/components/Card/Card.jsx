import React from "react";
import styles from "./Card.module.css"
import {Link} from "react-router-dom"

export default function Card(props) {
   return (
      <div className={styles.card}>
        <img className={styles.image} src={props.image} alt="" />
        <button className={styles.close} onClick={()=>props.onClose(props.id)}>x</button>
        <Link to={`/detail/${props.id}`}>
          <p className={styles.name}>{props.name}</p>
        </Link>
        
        <div className={styles.datos}> 
          <p className={styles.species}>Species: {props.species}</p>
          <p className={styles.gender}>Gender: {props.gender}</p>
        </div>
      </div>
   );
}
