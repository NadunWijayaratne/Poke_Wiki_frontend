import { TextField, Button } from "@mui/material";

import "../styles/createForm.css";

function createPokemon() {
  return (
    <div className="createPage">
      <form className="create_poke_form">
        <p>
          <TextField
            className="create_poke_name"
            label="Name"
            variant="filled"
            required
          />
          <TextField
            className="create_poke_type"
            label="Type"
            variant="filled"
            required
          />
        </p>
        <p>
          <TextField
            className="create_poke_hp"
            label="hp"
            variant="filled"
            required
          />
          <TextField
            className="create_poke_attack"
            label="attack"
            variant="filled"
            required
          />
        </p>
        <p>
          <TextField
            className="create_poke_defence"
            label="defence"
            variant="filled"
            required
          />
        </p>
      </form>
      <Button variant="contained" color="primary">
        Exit
      </Button>
      <Button className="save_button" variant="contained" color="primary">
        Save
      </Button>
    </div>
  );
}

export default createPokemon;
