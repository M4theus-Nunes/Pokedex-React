import React from "react";
import styles from "./PaginaBase.module.css";
import Logo from "../../assets/img/logo.png";

const PaginaBase = ({ children }) => {
  return (
    <>
      <header className={styles.headerContainer}>
        <img src={Logo} alt="logo" className={styles.logo} />
      </header>
      <main>{children}</main>
    </>
  );
};

export default PaginaBase;
