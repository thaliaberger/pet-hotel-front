import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

import Homepage from "./components/homepage/Homepage";
import Register from "./components/cadastro/Register";
import CadastroPet from "./components/cadastro/CadastroPet";
import Dashboard from "./components/dashboard/Dashboard";
import { AuthContextComponent } from "./contexts/AuthContext";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <AuthContextComponent>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/register" component={Register} />
            <PrivateRoute exact path="/novo-pet" component={CadastroPet} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
          </Switch>
        </AuthContextComponent>
      </BrowserRouter>
    </div>
  );
}

export default App;
