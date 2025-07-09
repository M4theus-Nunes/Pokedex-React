import React, { useState, useEffect } from "react";
import PageBase from "../../layout/Base/PageBase.jsx";
import { InputSearch } from "../../components/InputSearch/InputSearch";
import styles from "./Home.module.css";
import { fetchPokedex } from "../../services/PokeAPI.js";
import PokeCard from "../../components/PokeCard/PokeCard.jsx";
import Spinner from "../../components/Spinner/Spinner.jsx";

const Home = () => {
  const [pokedex, setPokedex] = useState([]);
  const [search, setSearch] = useState('')
  const [filterPodekex, setFilterPodekex] = useState([])

  useEffect(() => {
    fetchPokedex().then((data) => setPokedex(data));
  }, []);

  useEffect(() => {
    if (pokedex.length > 0) {
      setFilterPodekex(pokedex)
    }
  }, [pokedex])

  useEffect(() => {
    const filterPokemon = pokedex.filter((pokemon) => pokemon.name.toLowerCase().includes(search.toLowerCase().trim()) || pokemon.id.toString().includes(search.trim()));
    setFilterPodekex(filterPokemon)
  }, [search])


  return (
    <PageBase>
      <div className={styles.homeBody}>
        <div className={styles.searchWrapper}>
          <InputSearch setSearch={setSearch} />
        </div>
        <div className={styles.cardWrapper}>
          {pokedex.length === 0
            ? <Spinner size={"80px"} />
            : filterPodekex.length > 0
              ? <PokeCard pokedex={filterPodekex} />
              : <p className={styles.notFound}>Nenhum pokémon  com este nome foi encontrado!</p>}
        </div>
      </div>
    </PageBase>
  );
};

export default Home;
