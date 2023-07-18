import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pokemondata: [],
  pokemondetails: [],
  isLoading: null,
  searchKey: "all",
};

const dataSlice = createSlice({
  name: "pokedata",
  initialState,
  reducers: {
    setAllPokemon: (state, action) => {
      state.pokemondata = action.payload;
    },
    setDetailsPokemon: (state, action) => {
      state.poke;
    },
    setLoading: (state, action) => {
      state.pokemondata = action.payload;
    },
    setSearchKey: (state, action) => {
      state.searchKey = action.payload;
    },
  },
});

export const { setAllPokemon, setDetailsPokemon, setSearchKey } =
  dataSlice.actions;
export default dataSlice.reducer;
