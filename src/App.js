import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

import Homepage from "./components/homepage/Homepage";
import Cadastro from "./components/cadastro/Cadastro";
import CadastroPet from "./components/cadastro/CadastroPet";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/cadastro" component={Cadastro} />
          <Route exact path="/cadastro/pet" component={CadastroPet} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
