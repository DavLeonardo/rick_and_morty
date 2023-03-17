/* eslint-disable no-useless-escape */

const validation = (userData, errors, setErrors) => {
  if (!userData.username) {
    setErrors({ ...errors, username: "No puede estar vacio!" });
  } else if (userData.username.length > 35) {
    setErrors({ ...errors, username: "No puede superar 35 caracteres!" });
  } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(userData.username)) {
    setErrors({ ...errors, username: "Usuario invalido!" });
  } else {
    setErrors({ ...errors, username: "" });
  }

  if (userData.password.length < 6 || userData.password.length > 20) {
    setErrors({ ...errors, password: "Longitud de password invalida!" });
  } else if (!/\d/.test(userData.password)) {
    setErrors({ ...errors, password: "Debe contener numeros!" });
  } else {
    setErrors({ ...errors, password: "" });
  }
};
export default validation;
