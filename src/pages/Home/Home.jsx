import React, { useState, useEffect } from "react";
import PaginaBase from "../../layout/PaginaBase/PaginaBase";
import { InputPesquisa } from "../../components/InputPesquisa/InputPesquisa";
import styles from "./Home.module.css";
// import InputPesquisa from  '.Ho'
import { fetchPokedex } from "../../services/PokeAPI.js";
import PokeCard from "../../components/PokeCard/PokeCard.jsx";

const Home = () => {
  const [pokedex, setPokedex] = useState([]);
  console.log(pokedex);

  useEffect(() => {
    fetchPokedex().then((data) => setPokedex(data));
  }, []);

  return (
    <PaginaBase>
      <div className={styles.homeBody}>
        <div className={styles.pesquisaWrapper}>
          <InputPesquisa />
        </div>

        <h1 style={{ textAlign: "center" }}>Teste</h1>
        {pokedex.map((item) => (
          <div key={item.id} style={{display:'flex', alignItems:'center'}}>
            <h1 key={item.id}>{`id: ${item.id} - nome: ${item.name}`}</h1>
            <img src={item.sprites.front_default} alt={item.name} />
          </div>
        ))}

        <h1>Aqui vai ficar os cards</h1>
        <PokeCard />
      </div>
    </PaginaBase>
  );
};

export default Home;
