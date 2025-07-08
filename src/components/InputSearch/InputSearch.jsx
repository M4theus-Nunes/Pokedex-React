import React from "react";
import styles from "./InputSearch.module.css";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";

export const InputSearch = ({setSearch}) => {
  return (
    <div>
      <div className={styles.inputSearchContainer}>
        <label htmlFor="search">Pesquisa</label>
        <div className={styles.inputSearchGroup}>
          <input
            type="text"
            id="search"
            placeholder="Pesquise..."
            className={styles.inputSearch}
            autoComplete="off"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="button" className={styles.buttonSearch}>
            <SearchSharpIcon fontSize="large"/>
          </button>
        </div>
      </div>
    </div>
  );
};
