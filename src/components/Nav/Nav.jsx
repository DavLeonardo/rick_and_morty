import React from "react";
import SerachBar from "../SearchBar/SearchBar.jsx"
import style from './Nav.module.css'
import {Link} from "react-router-dom"

function Nav(props){
  return(
    <div className={style.nav}>
      <SerachBar onSearch={props.onSearch}/>
      <Link to="/about">
        <h3>About</h3>
      </Link>
      <Link to="/home">
        <h3>Home</h3>
      </Link>
    </div>
  );

}

export default Nav;