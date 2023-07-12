import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Pagination,
} from "@mui/material/";
import { Link } from "react-router-dom";
import "../styles/pkForm.css";

function createData(name, type, hp, attack, defence) {
  return { name, type, hp, attack, defence };
}

const rows = [
  createData("Bulbasaur", "Leaf", 38, 28, 91),
  createData("Ivysaur", "Leaf", 68, 29, 17),
  createData("Charmeleon", "Fire", 34, 53, 29),
];
function pokeForm() {
  return (
    <div className="Table">
      <TableContainer className="tabelComponent" component={Paper}>
        <div className="tableblock">
          <div className="ButtonContainer">
            <Link to="/createpokemon">
              <Button className="Button1">Add pokemon</Button>
            </Link>
            <Link to="/editpokemon">
              <Button className="Button2">Edit pokemon</Button>
            </Link>
          </div>
          <Table className="actualTable">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Hp</TableCell>
                <TableCell>Attack</TableCell>
                <TableCell>Defence</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.type}</TableCell>
                  <TableCell>{row.hp}</TableCell>
                  <TableCell>{row.attack}</TableCell>
                  <TableCell>{row.defence}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Pagination className="pagination" count={4} />
        </div>
      </TableContainer>
    </div>
  );
}

export default pokeForm;
