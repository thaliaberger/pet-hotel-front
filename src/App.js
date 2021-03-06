import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

import Homepage from "./components/homepage/Homepage";
import Register from "./components/cadastro/Register";
import CadastroPet from "./components/cadastro/CadastroPet";
import Dashboard from "./components/dashboard/Dashboard";
import { AuthContextComponent } from "./contexts/AuthContext";
import PrivateRoute from "./routes/PrivateRoute";

import Cadastro from "./components/cadastro/Cadastro";
import EditCadastro from "./components/cadastro/EditCadastro";
import Booking from "./components/booking/Booking";
import EditPet from "./components/cadastro/EditPet";
import BookingDelete from "./components/booking/BookingDelete";
import BookingPayment from "./components/booking/BookingPayment";
import DeletePet from "./components/cadastro/DeletePet";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <AuthContextComponent>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/cadastro" component={Cadastro} />
            <Route exact path="/cadastro/edit/:id" component={EditCadastro} />
            <PrivateRoute exact path="/novo-pet" component={CadastroPet} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute exact path="/booking" component={Booking} />
            <PrivateRoute
              exact
              path="/booking/delete/:id"
              component={BookingDelete}
            />
            <PrivateRoute
              exact
              path="/booking/payment/:id"
              component={BookingPayment}
            />
            <PrivateRoute exact path="/pet/:id" component={EditPet} />
            <PrivateRoute exact path="/pet/delete/:id" component={DeletePet} />
          </Switch>
        </AuthContextComponent>
      </BrowserRouter>
    </div>
  );
}

export default App;
