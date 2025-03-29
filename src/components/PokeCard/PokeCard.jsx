import React from "react";
import styles from "./PokeCard.module.css";
import { fetchPokemon } from "../../services/PokeAPI";

const PokeCard = ({ pokedex }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
      <div
        style={{
          backgroundColor: 'red',
          width: '100px',
          height: '100px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h1>Card</h1>
      </div>
    </div>
  );
  
};

export default PokeCard;
