import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pokemondata: null,
  pokemondetails: null,
};

const dataSlice = createSlice({
  name: "pokedata",
  initialState,
  reducers: {
    setAllPokemon: (state, action) => {
      state.pokemondata = action.payload;
    },
    detailsPokemon: (state, action) => {
      state.poke;
    },
  },
});

export const { setAllPokemon } = dataSlice.actions;
export default dataSlice.reducer;
