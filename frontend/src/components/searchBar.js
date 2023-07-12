import { Box, TextField, Container } from "@mui/material/";
import "../styles/searchBar.css";

function searchBar() {
  return (
    <Box className="formCont">
      <TextField
        className="searchBar"
        label="Search..."
        type="search"
        variant="filled"
        InputProps={{ style: { textAlign: "center" } }}
      />
    </Box>
  );
}

export default searchBar;
