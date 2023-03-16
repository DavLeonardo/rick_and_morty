/* eslint-disable no-useless-constructor */
import React from "react";
import style from "./About.module.css"

class About extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className={style.about}>
        <h1>  Este es el componente About</h1>
      </div>
    )
  }
}

export default About;