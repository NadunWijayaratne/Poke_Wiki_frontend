import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  type: "",
  hp: "",
  attack: "",
  defence: "",
};

const dataSlice = createSlice({
  name: "pokedata",
  initialState,
  reducers: {
    setName: (state, action) => {
      const pkname = action.payload;
      state.name = pkname;
    },
    setType: (state, action) => {
      const pktype = action.payload;
      state.type = pktype;
    },
    setHp: (state, action) => {
      const pkhp = action.payload;
      state.hp = pkhp;
    },
    setAtk: (state, action) => {
      const pkAtk = action.payload;
      state.atk = pkAtk;
    },
    setDef: (state, action) => {
      const pkDef = action.payload;
      state.def = pkDef;
    },
  },
});

export const { setName, setType, setHp, setAtk, setDef } = dataSlice.actions;
export default dataSlice.reducer;
