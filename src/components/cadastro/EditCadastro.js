import React, { useState, useEffect } from "react";
import axios from "axios";

import FormCadastro from "../form/FormCadastro";

function EditCadastro(props) {
    const [state, setState] = useState({
        name: "",
        mobile: "",
        street: "",
        number: "",
        complement: "",
        city: "",
        state: "",
        zipcode:"",
    });
    
    const { id } = props.match.params;

    useEffect(() => {
        async function fetchCadastro() {
            try {
                const response = await axios.get(`http://ec2-52-14-163-166.us-east-2.compute.amazonaws.com/api/client/${id}`);
                setState({...response.data});
            } catch(err) {
                console.error(err);
            } 
        }
        fetchCadastro();
    }, [id]);

    async function handleSubmit() {
        try {
            const response = await axios.patch(`api/client/${id}`, state);

            props.history.push("/dashboard");
        } catch(err) {
            console.error(err);
        }
    }

    return(
        <div>
            <h2>Edite suas informações</h2>
            <FormCadastro
            state={state}
            setState={setState}
            handleSubmit={handleSubmit}
            />
        </div>
    );

}

export default EditCadastro;