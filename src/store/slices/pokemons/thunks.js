import axios from "axios";
import { pokeApi } from "../../../api/pokeApi";
import { setPokemons, startLoadingPokemons } from "./pokemonSlice";

export const getPokemons = (page = 0) => {
    return async (dispatch, getState) => {
        dispatch(startLoadingPokemons());

        // Realiza peticion http
        const { data } = await pokeApi.get(
            `/pokemon?limit=10&offset=${page * 10}`
        );

        console.log(data);
        dispatch(setPokemons({ pokemon: data.results, page }));
    };
};
