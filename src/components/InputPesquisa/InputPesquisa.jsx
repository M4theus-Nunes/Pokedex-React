import React from "react";
import styles from "./InputPesquisa.module.css";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";

export const InputPesquisa = () => {
  return (
    <div className={styles.inputPesquisaWrapper}>
      <div className={styles.inputPesquisaContainer}>
        <label htmlFor="pesquisa">Pesquisa</label>
        <div className={styles.inputPesquisaAgrupador}>
          <input
            type="text"
            id="pesquisa"
            placeholder="Pesquise..."
            className={styles.inputPesquisa}
            autoComplete="off"
          />
          <button type="button" className={styles.botaoPesquisa}>
            <SearchSharpIcon fontSize="large" />
          </button>
        </div>
      </div>
    </div>
  );
};
