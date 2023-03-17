import React, { useState } from "react";
import styles from "./Card.module.css"
import {Link} from "react-router-dom"
import { connect } from "react-redux";
import { addFavorite, removeFavorite} from "../../redux/action";

function Card(props) {
  const [isFav, setIsFav] = useState(false);
  const handleFavorite = ()=>{
    if (isFav){
      setIsFav(false);
      removeFavorite(props.id);
    } else{
      setIsFav(true);
      addFavorite(props);
    }

  }
   return (
      <div className={styles.card}>
        <div>
        {
          isFav ? (
            <button onClick={handleFavorite}>❤️</button>
          ) : (
            <button onClick={handleFavorite}>🤍</button>
          )
        }
        </div>
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
const mapDispatchToProps = (dispatch)=> {
  return{
    addFavorite: (character)=>{dispatch(addFavorite(character))},
    removeFavorite: (id)=>{dispatch(removeFavorite(id))},
  }
  
}

export default connect(null, mapDispatchToProps)(Card);