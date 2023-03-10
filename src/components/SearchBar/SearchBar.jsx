import React from "react";
import styles from "./SearchBar.module.css"


export default function SearchBar({onSearch}) {
   return (
      <div className={styles.barra}>
         <input type="search"/>
         <button onClick={  (id) => {
            onSearch(id)
          }}>
            Agregar
          </button>
      </div>
   );
}
