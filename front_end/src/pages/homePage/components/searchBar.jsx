import { Box, TextField, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { setSearchKey } from "../../../store/slices/dataSlice";

export default function Searchbar() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState(null);

  const pattern = /^[A-Za-z]+$/;

  function handleSearch() {
    if (pattern.test(search) || search == null || search == "") {
      if (search == "" || search == null) {
        dispatch(setSearchKey("all"));
      } else {
        dispatch(setSearchKey(search));
      }
    } else {
      alert("Only type names");
    }
  }
  return (
    <Box>
      <TextField
        className="searchbar"
        label="Search..."
        type="search"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <Button onClick={handleSearch}>Search</Button>
    </Box>
  );
}
