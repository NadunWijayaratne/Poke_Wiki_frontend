import Searchbar from "./components/searchBar";
import useDataGetter from "../../hooks/useDataGetter";
import TableComp from "./components/tableComp";
import { Container } from "@mui/material";

export default function MainPage() {
  const url = "http://localhost:3000/pokedata";
  const { pokemondata } = useDataGetter(url);
  console.log({ pokemondata });

  return (
    <div>
      <Container>
        <Searchbar />
        <TableComp />
      </Container>
    </div>
  );
}
