import * as React from "react";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";
import {
  ListItem,
  ListItemText,
  Typography,
  Card,
  Box,
  List,
  Divider,
} from "@mui/material";

export default function TableComp() {
  const { pokemondata } = useSelector((state) => state.data);
  return (
    <Card>
      <Box>
        {pokemondata.map((pokemon) => (
          <List key={pokemon.name}>
            <ListItem className="pokemonlist/styles" alignItems="flex-start">
              <ListItemText
                primary={pokemon.name}
                secondary={
                  <React.Fragment>
                    <Typography paddingTop={5}>Description:</Typography>
                    <Typography maxWidth={400}>
                      {pokemon.description}
                    </Typography>
                  </React.Fragment>
                }
              />
              <ListItemText
                edge="end"
                secondary={
                  <React.Fragment>
                    <Typography paddingTop={8}>Type: {pokemon.type}</Typography>
                    <Typography>Hp: {pokemon.hp}</Typography>
                    <Typography>Attack: {pokemon.atk}</Typography>
                    <Typography>Defence: {pokemon.def}</Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider />
          </List>
        ))}
      </Box>
    </Card>
    // <TableContainer component={Paper}>
    //   <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
    //     <TableHead>
    //       <TableRow>
    //         <TableCell>name </TableCell>
    //         <TableCell align="center">description</TableCell>
    //         <TableCell align="center">type&nbsp;</TableCell>
    //         <TableCell align="center">hp&nbsp;</TableCell>
    //         <TableCell align="center">attack&nbsp;</TableCell>
    //         <TableCell align="center">defence&nbsp;</TableCell>
    //       </TableRow>
    //     </TableHead>
    //     <TableBody>
    //       {pokemondata.map((pokemon) => (
    //         <TableRow
    //           key={pokemon.name}
    //           sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    //         >
    //           <TableCell component="th" scope="row">
    //             {pokemon.name}
    //           </TableCell>
    //           <TableCell align="right">{pokemon.description}</TableCell>
    //           <TableCell align="right">{pokemon.type}</TableCell>
    //           <TableCell align="right">{pokemon.hp}</TableCell>
    //           <TableCell align="right">{pokemon.atk}</TableCell>
    //           <TableCell align="right">{pokemon.def}</TableCell>
    //         </TableRow>
    //       ))}
    //     </TableBody>
    //   </Table>
    // </TableContainer>
  );
}
