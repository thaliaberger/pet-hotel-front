import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import SimpleInput from "./SimpleInput";
import SelectInput from "./SelectInput";

const storedUser = localStorage.getItem("loggedInUser");
const loggedInUser = JSON.parse(storedUser || '""');

function FormCadastro() {
    const [clientState, setClientState] = useState({
        name: "",
        mobile: "",
        street: "",
        number: "",
        complement: "",
        city: "",
        state: "",
        zipcode:"",
    });
    const [errors, setErrors] = useState({
        name: null,
        mobile: null,
        street: null,
        number: null,
        complement: null,
        city: null,
        state: null,
        zipcode: null,
    });
    const history = useHistory();

    const state = ["Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará", "Distrito Federal", "Espírito Santo", "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro", "Rio Grande do Norte", "Rio Grande do Sul", "Rondônia", "Roraima", "Santa Catarina", "São Paulo", "Sergipe", "Tocantins"];

    function handleChange(event) {
        setClientState({...clientState, [event.target.name] : event.target.value});
    }

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const response = await axios.post(
                "http://ec2-52-14-163-166.us-east-2.compute.amazonaws.com/api/client/",
                clientState                
            );
            console.log(response.data);
            history.push("/dashboard");
        } catch(error) {
            console.log(error.response);
            setErrors({...error.response.data.errors});
        }
    }

    function goBack() {
        history.push("/dashboard");
    }    

    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
            <SimpleInput
            name="name"
            label="Nome completo"
            type="text"
            value={clientState.name}
            onChange={handleChange}
            error={errors.name}
            />
            <SimpleInput
            name="mobile"
            label="Telefone"
            type="text"
            value={clientState.mobile}
            onChange={handleChange}
            error={errors.mobile}
            />
            <SimpleInput
            name="street"
            label="Rua"
            type="text"
            value={clientState.street}
            onChange={handleChange}
            error={errors.street}
            />
            <SimpleInput
            name="number"
            label="Número"
            type="text"
            value={clientState.number}
            onChange={handleChange}
            error={errors.number}
            />
            <SimpleInput
            name="complement"
            label="Complemento"
            type="text"
            value={clientState.complement}
            onChange={handleChange}
            error={errors.complement}
            />
            <SimpleInput
            name="city"
            label="Cidade"
            type="text"
            value={clientState.city}
            onChange={handleChange}
            error={errors.city}
            />
            <SelectInput
            name="state"
            label="Estado"
            id="state"
            options={state}
            value={clientState.state}
            onChange={handleChange}
            />          
            <SimpleInput
            name="zipcode"
            label="CEP"
            type="text"
            value={clientState.zipcode}
            onChange={handleChange}
            error={errors.zipcode}
            />
            <div className="botoes-cadastro">
                <button className="botao-azul" type="button" onClick={goBack}>
                    Voltar
                </button>
                <button className="botao-laranja" type="button" onClick={handleSubmit}>
                    Ok
                </button>
            </div>
        </form>
        </div>
        
    );

}

export default FormCadastro;