import React, { useState, useEffect } from "react";
import PageBase from "../../layout/Base/PageBase.jsx";
import { InputSearch } from "../../components/InputSearch/InputSearch";
import styles from "./Home.module.css";
import { fetchPokedex } from "../../services/PokeAPI.js";
import PokeCard from "../../components/PokeCard/PokeCard.jsx";
import Spinner from "../../components/Spinner/Spinner.jsx";
import TablePagination from '@mui/material/TablePagination';

const Home = () => {
  const [pokedex, setPokedex] = useState([]);
  const [search, setSearch] = useState('');
  const [filterPodekex, setFilterPodekex] = useState([]);

  // Paginação
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    fetchPokedex().then((data) => setPokedex(data));
  }, []);

  useEffect(() => {
    if (pokedex.length > 0) {
      setFilterPodekex(pokedex);
      setPage(0); // sempre volta para página 0 ao atualizar pokedex
    }
  }, [pokedex]);

  useEffect(() => {
    const filterPokemon = pokedex.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(search.toLowerCase().trim()) ||
      pokemon.id.toString().includes(search.trim())
    );
    setFilterPodekex(filterPokemon);
    setPage(0); // volta para a primeira página ao pesquisar
  }, [search, pokedex]);

  // Funções de controle da paginação
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Cards da página atual
  const currentCards = filterPodekex.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <PageBase>
      <div className={styles.homeBody}>
        <div className={styles.searchWrapper}>
          <InputSearch setSearch={setSearch} />
        </div>
        <>
          {pokedex.length === 0 ? (
            <Spinner size={"80px"} />
          ) : filterPodekex.length > 0 ? (
            <div className={styles.cardContainer}>
              <div className={styles.cardWrapper}>
                <PokeCard pokedex={currentCards} />
              </div>
              <TablePagination
                sx={{
                  color: '#ffffffbd',
                  '& .MuiTablePagination-selectLabel': {fontSize:'1.6rem'},
                  '& .MuiTablePagination-select': { fontSize:'1.6rem'},
                  '& .MuiTablePagination-displayedRows': {fontSize:'1.6rem',ontWeight: 'bold' },
                  '& .MuiSvgIcon-root': {fontSize:'2rem'},
                }}
                component="div"
                count={filterPodekex.length}
                page={page}
                onPageChange={handleChangePage}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                rowsPerPageOptions={[10, 40, 100, 200, 500, 1025]}
                labelRowsPerPage="Pokémons por página:"
              />
            </div>
          ) : (
            <p className={styles.notFound}>Nenhum pokémon encontrado!</p>
          )}
        </>
      </div>
    </PageBase>
  );
};

export default Home;
