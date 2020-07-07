import React from 'react';

const PokemonDetail = ({pokemon}) => {

    if(!pokemon) return null;

    return (
        <div id ="pokemon-detail">
            <h3>Pokemon name: {pokemon.name.toUpperCase()}</h3>
            <h3>Weight: {pokemon.weight} kg</h3>
            <h3>Height: {pokemon.height * 10} cm</h3>
        </div>
    )
}


export default PokemonDetail;