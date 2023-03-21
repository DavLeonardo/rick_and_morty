import React from "react";
import SerachBar from "../SearchBar/SearchBar.jsx"
import style from './Nav.module.css'
import {Link} from "react-router-dom"

function Nav(props){
  return(
    <div className={style.nav}>
      <Link to="/home">
        <h3 className={style.home}>Home </h3>
      </Link>
      
      <Link to="/favorites">
        <h3 className={style.home}>Favorites </h3>
      </Link>
      <Link to="/about">
        <h3 className={style.home}>About </h3>
      </Link>
      <div className={style.search}>
        <SerachBar  onSearch={props.onSearch}/>
      </div>
      
    </div>
  );

}

export default Nav;