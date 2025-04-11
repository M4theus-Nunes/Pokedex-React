import React, { useState, useEffect } from "react";
import PaginaBase from "../../layout/PaginaBase/PaginaBase";
import { InputPesquisa } from "../../components/InputPesquisa/InputPesquisa";
import styles from "./Home.module.css";
import { fetchPokedex } from "../../services/PokeAPI.js";
import PokeCard from "../../components/PokeCard/PokeCard.jsx";

const Home = () => {
  const [pokedex, setPokedex] = useState([]);

  useEffect(() => {
    fetchPokedex().then((data) => setPokedex(data));
  }, []);

  return (
    <PaginaBase>
      <div className={styles.homeBody}>
        <div className={styles.pesquisaWrapper}>
          <InputPesquisa />
        </div>
        <h1>Aqui vai ficar os cards</h1>
        <div className={styles.cardWrapper}>
        <PokeCard pokedex={pokedex}/>
        </div>
      </div>
    </PaginaBase>
  );
};

export default Home;
