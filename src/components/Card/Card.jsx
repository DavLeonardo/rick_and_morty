import React from "react";

export default function Card(props) {
   return (
      <div>
        <button onClick={props.onClose}>X</button>
        <p>{props.name}</p>
        <p>{props.species}</p>
        <p>{props.gender}</p>
        <img src={props.image} alt="" />
      </div>
   );
}
