/* eslint-disable react/prop-types */
import React from "react";
import "./Card.css";

function Card({ pokemon }) {
  return (
    <React.Fragment>
      <div className="pokemon-card">
        <h2 className="pokemon-name">{pokemon.pokemonName}</h2>
        <img
          className="pokemon-avatar"
          src={pokemon.avatar}
          alt={pokemon.pokemonName}
        />
        <ul className="pokemon-powers">
          {Object.values(pokemon.power).map((habilidad, index) => {
            return <li key={index}>{habilidad}</li>;
          })}
        </ul>
      </div>
      ;
    </React.Fragment>
  );
}

export default Card;
