import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import api from "../../api/HotelApi";

import SimpleInput from "./SimpleInput";
import SelectInput from "./SelectInput";

function FormCadastro() {
    const [ adressState, setAdress] = useState({
        street: "", 
        number: "", 
        complement: "", 
        city: "", 
        state: "", 
        zipcode:""
    })

    const [clientState, setClientState] = useState({
        name: "",
        mobile: "",
        adress: adressState,
        pets: []
    });

    const [errors, setErrors] = useState({
        name: null,
        mobile: null,
        adreess: {street: null, number: null, complement: null, city: null, state: null, zipcode: null}
    });

    const history = useHistory();

    const state = ["Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará", "Distrito Federal", "Espírito Santo", "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro", "Rio Grande do Norte", "Rio Grande do Sul", "Rondônia", "Roraima", "Santa Catarina", "São Paulo", "Sergipe", "Tocantins"];

    function handleChange(event) {
        setClientState({...clientState, [event.target.name] : event.target.value});
    }

    function handleChangeAdress(event) {
        setAdress({...adressState, [event.target.name] : event.target.value});
        setClientState({...clientState, adress:adressState});
    }

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const response = await api.post(
                "/client/",
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
            value={adressState.street}
            onChange={handleChangeAdress}
            error={errors.street}
            />
            <SimpleInput
            name="number"
            label="Número"
            type="text"
            value={adressState.number}
            onChange={handleChangeAdress}
            error={errors.number}
            />
            <SimpleInput
            name="complement"
            label="Complemento"
            type="text"
            value={adressState.complement}
            onChange={handleChangeAdress}
            error={errors.complement}
            />
            <SimpleInput
            name="city"
            label="Cidade"
            type="text"
            value={adressState.city}
            onChange={handleChangeAdress}
            error={errors.city}
            />
            <SelectInput
            name="state"
            label="Estado"
            id="state"
            options={state}
            value={adressState.state}
            onChange={handleChangeAdress}
            />          
            <SimpleInput
            name="zipcode"
            label="CEP"
            type="text"
            value={adressState.zipcode}
            onChange={handleChangeAdress}
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