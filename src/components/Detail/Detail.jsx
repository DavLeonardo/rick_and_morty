/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import styles from "./Detail.module.css"
import {useParams} from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Detail = () =>{
  const params = useParams();
  const id = params.detailId;
  const [character, setCharacter] = useState({})
  
  useEffect(() => {
    const URL_BASE = "https://be-a-rym.up.railway.app/api";
    const KEY = "5ea29da0ee70.285f23073db6427e8314";
    axios(`${URL_BASE}/character/${id}?key=${KEY}`)
    .then((response) => setCharacter(response.data))
  },[]);

  return(
    <div className={styles.detail}>
      {
        character.name ?(
          <>
            <h2>{character.name}</h2>
            <p>{character.status}</p>
            <p>{character.species}</p>
            <p>{character.gender}</p>
            <p>{character.origin?.name}</p>
            <img src={character.image} alt="img" />
          </>
        ) : (
          <h3>Loading...</h3>
        )
      }
      
    </div>
  )
}

export default Detail;