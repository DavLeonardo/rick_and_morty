import React from "react";
import SerachBar from "../SearchBar/SearchBar.jsx"
import style from './Nav.module.css'

function Nav(props){
  return(
    <div className={style.nav}>
      <SerachBar id={props}/>
    </div>
  );

}

export default Nav;