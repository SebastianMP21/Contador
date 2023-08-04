import React from "react";
import Texto from "./components/Texto"
import Contador from "./components/Contador";
import ListaNombres from "./components/ListaNombres"

const App = () => {
  return <div className="container">
    {/* <Texto name="Sebastian" apellido="Marquez" edad={23}/>
    <Texto name="Miguel" apellido="Alarcón" edad={25}/>
    <Contador/> */}
    <ListaNombres/>
  </div>

}

export default App;