import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";

export default function TableComp() {
  const { pokemondata } = useSelector((state) => state.data);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>name </TableCell>
            <TableCell align="center">description</TableCell>
            <TableCell align="center">type&nbsp;</TableCell>
            <TableCell align="center">hp&nbsp;</TableCell>
            <TableCell align="center">attack&nbsp;</TableCell>
            <TableCell align="center">defence&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pokemondata.map((pokemon) => (
            <TableRow
              key={pokemon.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {pokemon.name}
              </TableCell>
              <TableCell align="right">{pokemon.description}</TableCell>
              <TableCell align="right">{pokemon.type}</TableCell>
              <TableCell align="right">{pokemon.hp}</TableCell>
              <TableCell align="right">{pokemon.atk}</TableCell>
              <TableCell align="right">{pokemon.def}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
