import { Box, TextField } from "@mui/material";

export default function Searchbar() {
  return (
    <Box>
      <TextField className="searchbar" label="Search..." type="search" />
    </Box>
  );
}
