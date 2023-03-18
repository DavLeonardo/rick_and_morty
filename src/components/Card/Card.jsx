import React, { useEffect, useState } from "react";
import styles from "./Card.module.css"
import {Link} from "react-router-dom"
import { connect } from "react-redux";
import { addFavorite, removeFavorite} from "../../redux/actions";

function Card(props) {
  const [isFav, setIsFav] = useState(false);
  const handleFavorite = ()=>{
    if (isFav){
      setIsFav(false);
      props.removeFavorite(props.id);
    } else{
      setIsFav(true);
      props.addFavorite(props);
    }

  }
    useEffect(()=>{
      props.myFavorites.forEach((fav)=>{
        if(fav.id === props.id){
          setIsFav(true);
        }
      })
    })
    
    return (
        <div className={styles.card}>
          <div className={styles.fav}>
          {
            isFav ? (
              <button className={styles.button} onClick={handleFavorite}>❤️</button>
            ) : (
              <button className={styles.button} onClick={handleFavorite}>🤍</button>
            )
          }
          </div>
          <img className={styles.image} src={props.image} alt="" />
          <button className={styles.close} onClick={()=>props.onClose(props.id)}>x</button>
          <Link className={styles.link} to={`/detail/${props.id}`}>
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
const mapStateToProps = (state) =>{
  return{
    myFavorites: state.myFavorites,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);