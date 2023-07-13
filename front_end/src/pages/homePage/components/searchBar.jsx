import { Box, TextField } from "@mui/material";

function searchBar() {
  return (
    <Box>
      <TextField className="searchbar" label="Search..." type="search" />
    </Box>
  );
}
