import CustomPaginationActionsTable from "./components/pokeTable";
import Searchbar from "./components/searchBar";
import useAccessData from "../../hooks/useAccessData";
import { Box, Stack } from "@mui/material";

export default function MainPage() {
  const url = "localhost:3001/pokedata";
  
  return (
    <div>
      <Searchbar />
      
      <CustomPaginationActionsTable />
    </div>
  );
}
