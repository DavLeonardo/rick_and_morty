import React from "react";
import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
import { useState } from "react";

function App() {
  // function onSearch(character) {
  //   fetch(`https://rickandmortyapi.com/api/character/${character}`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       if (data.name) {
  //         setCharacters((oldChars) => [...oldChars, data]);
  //       } else {
  //         window.alert("No hay personajes con ese ID");
  //       }
  //     });
  // }
  const [characters, setCharacters] = useState([]);

  const onSearch = (id) => {
    const URL_BASE = "https://be-a-rym.up.railway.app/api";
    const KEY = "5ea29da0ee70.285f23073db6427e8314";

    fetch(`${URL_BASE}/character/${id}?key=${KEY}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name && !characters.find((char) => char.id === data.id)) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          alert("Algo salio mal");
        }
      });
  };

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
  };

  return (
    <div className="App" style={{ padding: "25px" }}>
      <div>
        <Nav onSearch={onSearch} />
      </div>
      <hr style={{ margin: "50px" }} />
      <div>
        <Cards characters={characters} onClose={onClose} />
      </div>
      <hr />
    </div>
  );
}
export default App;
