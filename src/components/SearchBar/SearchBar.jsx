import React from "react";
import { useState } from "react";
import styles from "./SearchBar.module.css"


export default function SearchBar({onSearch}) {
  const [id, setId] = useState("");

  const handleChange = (event) =>{
    setId(event.target.value);
  }
   return (
      <div className={styles.barra}>
         <input type="search" className={styles.search} placeholder="ID del personaje" onChange={handleChange}/>
         <button className={styles.button} onClick={()=>onSearch(id)}>
            Agregar
          </button>
      </div>
   );
}
