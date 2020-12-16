import React from "react";

import SimpleInput from "./SimpleInput";
import SelectInput from "./SelectInput";

function FormCadastro(props) {

    const state = ["Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará", "Distrito Federal", "Espírito Santo", "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro", "Rio Grande do Norte", "Rio Grande do Sul", "Rondônia", "Roraima", "Santa Catarina", "São Paulo", "Sergipe", "Tocantins"];

    return (
        <div className='container'>
            <form onSubmit={props.handleSubmit}>
            <SimpleInput
            name="name"
            label="Nome completo"
            type="text"
            value={props.clientState.name}
            onChange={props.handleChange}
            error={props.errors.name}
            />
            <SimpleInput
            name="mobile"
            label="Telefone"
            type="text"
            value={props.clientState.mobile}
            onChange={props.handleChange}
            error={props.errors.mobile}
            />
            <SimpleInput
            name="street"
            label="Rua"
            type="text"
            value={props.adressState.street}
            onChange={props.handleChangeAdress}
            error={props.errors.street}
            />
            <SimpleInput
            name="number"
            label="Número"
            type="text"
            value={props.adressState.number}
            onChange={props.handleChangeAdress}
            error={props.errors.number}
            />
            <SimpleInput
            name="complement"
            label="Complemento"
            type="text"
            value={props.adressState.complement}
            onChange={props.handleChangeAdress}
            error={props.errors.complement}
            />
            <SimpleInput
            name="city"
            label="Cidade"
            type="text"
            value={props.adressState.city}
            onChange={props.handleChangeAdress}
            error={props.errors.city}
            />
            <SelectInput
            name="state"
            label="Estado"
            id="state"
            options={state}
            value={props.adressState.state}
            onChange={props.handleChangeAdress}
            error={props.errors.state}
            />          
            <SimpleInput
            name="zipcode"
            label="CEP"
            type="text"
            value={props.adressState.zipcode}
            onChange={props.handleChangeAdress}
            error={props.errors.zipcode}
            />
            <div className="botoes-cadastro">
                <button className="botao-azul" type="button" onClick={props.goBack}>
                    Voltar
                </button>
                <button className="botao-laranja" type="button" onClick={props.onSubmit}>
                    Ok
                </button>
            </div>
        </form>
        </div>
        
    );

}

export default FormCadastro;