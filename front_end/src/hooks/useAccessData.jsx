import { useDispatch, useSelector } from "react-redux";
import { setAllPokemon } from "../store/slices/dataSlice";

const useAccessData = (url) => {
  const dispatch = useDispatch();
  const { pokemondata } = useSelector((state) => state.data);

  const allPokemon = async () => {
    const res = await axios.get(url).catch(function (error) {
      if (error.response) {
        setError("Task failed!");
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log("Error", error.message);
      }
      console.log(error.config);
    });
    dispatch(setAllPokemon(res.data));
    console.log(res.data);
  };

  useEffect(() => {
    allPokemon();
  }, [url]);
  return { pokemondata };
};

export default useAccessData;
