import React from 'react';

const PokemonDetail = ({pokemon}) => {

    if(!pokemon) return null;

    return (
        <>
            <h3>Pokemon name: {pokemon.name}</h3>
            <h3>Pokemon weight: {pokemon.weight} kg</h3>
            <h3>Pokemon height: {pokemon.height} meters</h3>

        </>
    )
}


export default PokemonDetail;