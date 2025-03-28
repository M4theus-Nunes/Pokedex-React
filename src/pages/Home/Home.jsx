import React from "react";
import PaginaBase from "../../layout/PaginaBase/PaginaBase";
import { InputPesquisa } from "../../components/InputPesquisa/InputPesquisa";
import styles from "./Home.module.css";
// import InputPesquisa from  '.Ho'

const Home = () => {
  return (
    <PaginaBase>
      <div className={styles.homeBody}>
        <div className={styles.pesquisaWrapper}>
          <InputPesquisa />
        </div>
      </div>
    </PaginaBase>
  );
};

export default Home;
