import React from "react";
import styles from "./PageBase.module.css";
import Logo from "../../assets/img/logo.png";

const PageBase = ({ children }) => {
  return (
    <>
      <header className={styles.headerContainer}>
        <img src={Logo} alt="logo" className={styles.logo} />
      </header>
      <main className={styles.mainContainer}>{children}</main>
    </>
  );
};

export default PageBase;
