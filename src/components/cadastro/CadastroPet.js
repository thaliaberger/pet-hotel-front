import React from "react";
import { Link } from "react-router-dom";
import "./Cadastro.css";

function CadastroPet() {
  return (
    <div className="container">
      <div className="cadastro cadastro-pet">
        <h2>Sobre o Pet</h2>
        <form>
          <input type="text" placeholder="Nome" />
          <select className="select" name="tipo-pet">
            <option value="" disabled selected>
              Tipo de Pet
            </option>
            <option value="Dog">Cachorro</option>
            <option value="Cat">Gato</option>
            <option value="Rabbit">Coelho</option>
            <option value="Dinossaur">Dinossauro</option>
          </select>
          <select className="select" name="porte-pet">
            <option value="" disabled selected>
              Porte
            </option>
            <option value="Small">Pequeno</option>
            <option value="Medium">Médio</option>
            <option value="Big">Grande</option>
          </select>
          <select className="select" name="breed">
            <option value="" disabled selected>
              Gênero
            </option>
            <option value="Macho">Macho</option>
            <option value="Fêmea">Fêmea</option>
          </select>

          <input type="text" placeholder="Alergias" />
          <input type="text" placeholder="Doenças" />

          <input type="text" placeholder="Recomendações" />
          <label htmlFor="image-upload">Enviar Imagem</label>
          <input type="file" name="image-upload" id="image-upload" />

          <div className="botoes-cadastro">
            <button className="botao-azul">Adicionar outro Pet</button>
            <button type="submit" className="botao-laranja">
              Concluir
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CadastroPet;
