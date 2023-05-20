import React from "react";
import Card from "./Card";
import { Pokemon } from "./pokemons";

function ListaPokemons() {
  //const arrayDePokemon = Object.keys(pokemon);
  return (
    <React.Fragment>
      <h1>Lista de Pokemons</h1>

      <h2>Lista de Pokemons de fuego</h2>
      {Pokemon.fire.map((pokemon, index) => {
        return <Card pokemon={pokemon} key={index} />;
      })}
    </React.Fragment>
  );
}

export default ListaPokemons;
