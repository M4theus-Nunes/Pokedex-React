import React from "react";
import styles from "./PokeCard.module.css";

const PokeCard = ({ pokedex }) => {
  const cores = {
    normal: { cor: "#A8A77A", fonte: "#1f1f20" },
    fire: { cor: "#FD7D24", fonte: "#FFFFFF" },
    water: { cor: "#6390F0", fonte: "#FFFFFF" },
    electric: { cor: "#F7D02C", fonte: "#1f1f20" },
    grass: { cor: "#7AC74C", fonte: "#1f1f20" },
    ice: { cor: "#96D9D6", fonte: "#1f1f20" },
    fighting: { cor: "#C22E28", fonte: "#FFFFFF" },
    poison: { cor: "#A33EA1", fonte: "#FFFFFF" },
    ground: { cor: "#E2BF65", fonte: "#1f1f20" },
    flying: { cor: "#A98FF3", fonte: "#1f1f20" },
    psychic: { cor: "#F95587", fonte: "#1f1f20" },
    bug: { cor: "#A6B91A", fonte: "#1f1f20" },
    rock: { cor: "#B6A136", fonte: "#1f1f20" },
    ghost: { cor: "#735797", fonte: "#FFFFFF" },
    dragon: { cor: "#6F35FC", fonte: "#FFFFFF" },
    dark: { cor: "#705746", fonte: "#FFFFFF" },
    steel: { cor: "#B7B7CE", fonte: "#1f1f20" },
    fairy: { cor: "#FDB9E9", fonte: "#1f1f20" },
  };

  return (
    <>
      {pokedex.map((item) => (
        <div key={item.id} className={styles.pokeCard}>
          <span className={styles.pokeId}>{`N° ${item.id}`}</span>

          <div className={styles.pokeImgContainer}>
            <img
              src={item.sprites.other["official-artwork"].front_default}
              alt="sprite pokémon"
            />
          </div>
          <span className={styles.pokeName}>{item.name}</span>

          <div className={styles.pokeTypes}>
            {item.types.map((type) => (
              <span
                style={{
                  backgroundColor: cores[type.type.name].cor,
                  color: cores[type.type.name].fonte,
                }}
                key={type.slot}
              >
                {type.type.name}
              </span>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default PokeCard;
