import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

import Homepage from "./components/Homepage";
import Cadastro from "./components/Cadastro";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/cadastro" component={Cadastro} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
