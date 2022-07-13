import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    page: 0,
    pokemons: [],
    isLoading: false,
};

export const pokemonSlice = createSlice({
    name: "pokemon",
    initialState,
    reducers: {
        startLoadingPokemons: (state) => {
            state.isLoading = true;
        },
        setPokemons: (state, action) => {
            state.isLoading = false;
            state.page = action.payload.page;
            state.pokemons = action.payload.pokemon;
        }

        // increment: (state) => {
        //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
        //   // doesn't actually mutate the state because it uses the Immer library,
        //   // which detects changes to a "draft state" and produces a brand new
        //   // immutable state based off those changes
        //   state.counter += 1
        // },
        // decrement: (state) => {
        //   state.counter -= 1
        // },
        // incrementByAmount: (state, action) => {
        //   state.counter += action.payload
        // },
    },
});

// Action creators are generated for each case reducer function
export const {startLoadingPokemons, setPokemons} = pokemonSlice.actions;
