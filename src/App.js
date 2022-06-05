import React from "react";
import Header from "./components/Header/Header";
import './App.css'
import Players from "./components/Players/Players";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Players></Players>
    </div>
  );
}

export default App;
