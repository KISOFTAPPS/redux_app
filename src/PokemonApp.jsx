import React, { useEffect } from "react";
import { getPokemons } from "./store/slices/pokemons";
import { useSelector, useDispatch } from "react-redux";

const PokemonApp = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPokemons());
    }, []);

    return (
        <section className="container">
            <h1>PokemonApp</h1>
            <hr />
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </section>
    );
};

export default PokemonApp;
