import React from "react";
import styles from "./Form.module.css"
import validation from "./validantion";
import { useState } from "react";



const Form = ({login}) =>{

  
  const [userData, setUserData] = useState({
    username: "",
    password: "",

  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });
  
  const handleInputChange = (event) =>{
    const property = event.target.name;
    const value = event.target.value;

    setUserData({...userData, [property]: value});
    validation({...userData, [property]: value}, errors, setErrors);
  } 
  const submitHandler = (event) =>{
    event.preventDefault();
    login(userData);
  };

  return(
    <div className={styles.page} >
      <form className={styles.form} onSubmit={submitHandler}>
      <div>
        <label htmlFor="username" ></label>
        <input type="text" className={styles.input} name="username" placeholder="Username" value={userData.username} onChange={handleInputChange}/>
        <p className={styles.error}>{errors.username}</p>
      </div>
      <div>
        <label htmlFor="password"></label>
        <input type="text" className={styles.input} name="password" placeholder="Password" value={userData.password} onChange={handleInputChange}/>
        <p className={styles.error}>{errors.password}</p>
      </div>
      <button className={styles.button}>LOGIN</button>
    </form>
    </div>
    
  );
};

export default Form;