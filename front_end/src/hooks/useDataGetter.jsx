import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setAllPokemon } from "../store/slices/dataSlice";
import axios from "axios";

const useDataGetter = (url) => {
  const dispatch = useDispatch();
  const { pokemondata } = useSelector((state) => state.data);

  const allPokemon = async () => {
    const res = await axios.get(url);
    try {
      if (res && res.data) {
        dispatch(setAllPokemon(res.data));
      }
    } catch (error) {
      console.error("Error in stornig data", error);
    }
  };

  useEffect(() => {
    allPokemon();
  }, [url]);
  return { pokemondata };
};

export default useDataGetter;
