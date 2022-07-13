import React, { useEffect } from "react";
import { getPokemons } from "./store/slices/pokemons";
import { useSelector, useDispatch } from "react-redux";

const PokemonApp = () => {
    const dispatch = useDispatch();

    let { isLoading, pokemons,page } = useSelector((state) => state.pokemons);

    useEffect(() => {
        dispatch(getPokemons());
    }, []);

    return (
        <section className="container">
            <h1>PokemonApp</h1>
            <hr />
            <span>Loading: {isLoading ? "True" : "False"} </span>
            <ul>
                {pokemons.map((pokemon) => (
                    <li key={pokemon.name}>{pokemon.name}</li>
                ))}
            </ul>
            <button disabled={isLoading || page <= 0 } onClick={()=> dispatch(getPokemons(page - 1))}>Back</button>
            <button disabled={isLoading} onClick={()=> dispatch(getPokemons(page + 1))}>Next</button>
        </section>
    );
};

export default PokemonApp;
