import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import api from "../../api/HotelApi";

import FormCadastro from "../form/FormCadastro";

function EditCadastro(props) {

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
    
    const { id } = props.match.params;

    useEffect(() => {
        async function fetchCadastro() {
            try {
                const response = await api.get("/client/");
                setClientState({...response.data.user});
                setAdress({...response.data.user.adress});
            } catch(err) {
                console.error(err);
            } 
        }
        fetchCadastro();
    }, [id]);

    async function handleSubmit() {
        try {
            const response = await api.patch("/client/", clientState);
            console.log(response);
            props.history.push("/dashboard");
        } catch(err) {
            console.error(err);
        }
    }

    function handleChange(event) {
        setClientState({...clientState, [event.target.name] : event.target.value});
    }

    function handleChangeAdress(event) {
        setAdress({...adressState, [event.target.name] : event.target.value});
        setClientState({...clientState, adress:adressState});
    }

    const history = useHistory();

    function goBack() {
        history.push("/dashboard");
    }

    return(
        <div className="container">
            <div className="cadastro">
                <h2>Edite suas informações</h2>
                <FormCadastro
                clientState={clientState}
                adressState={adressState}
                handleChange={handleChange}
                handleChangeAdress={handleChangeAdress}
                onSubmit={handleSubmit}
                goBack={goBack}
                errors={errors}
                />
            </div>
        </div>
       
    );

}

export default EditCadastro;