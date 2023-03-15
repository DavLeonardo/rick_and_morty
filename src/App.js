import React from "react";
import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
import characters from "./data.js";

function App() {
  return (
    <div className="App" style={{ padding: "25px" }}>
      <div>
        <Nav onSearch={(characterID) => window.alert(characterID)} />
      </div>
      <hr style={{ margin: "50px" }} />
      <div>
        <Cards characters={characters} />
      </div>
      <hr />
    </div>
  );
}
export default App;
