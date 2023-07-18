import { useState } from "react";
import axios from "axios";
import { Box, Stack, TextField, Typography, Button } from "@mui/material";
function CreatePokemon() {
  const [name, setname] = useState("");
  const [desc, setdesc] = useState("");
  const [type, settype] = useState("");
  const [hp, sethp] = useState("");
  const [atk, setatk] = useState("");
  const [def, setdef] = useState("");
  const [data, setdata] = useState([]);
  const [message, setmessage] = useState("");

  function handleClick() {
    const combined = { name, desc, type, hp, atk, def };
    setdata(combined);
    console.log("combined value :-", combined);
    checkValidation();
    clearForm();
  }

  const checkValidation = () => {
    if (!name) setmessage({ message: "Add a Name :(", type: "warning" });
    else if (!desc)
      setmessage({ message: "Wheres the description", type: "warning" });
    else if (!hp)
      setmessage({ message: "Pokemon needs health", type: "warning" });
    else if (!atk)
      setmessage({ message: "pokemon must attack!!!", type: "warning" });
    else if (!def)
      setmessage({ message: "pokemon must defend themselfs", type: "warning" });
    else postDate();
  };

  async function postDate() {
    const response = await axios
      .post("http://localhost:3000/pokedata", {
        name: data.name,
        description: data.desc,
        type: data.type,
        hp: +data.hp,
        atk: +data.atk,
        def: +data.def,
      })
      .then(function (response) {
        if (response.status == 201) {
          setmessage({
            message: "Pokemon was successfully added!",
            type: "success",
          });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function clearForm() {
    setname("");
    setdesc("");
    settype("");
    sethp("");
    setatk("");
    setdef("");
  }

  return (
    <>
      <Box>
        <Stack>
          <Box>
            <Typography>Add pokemon details</Typography>
            <Stack>
              <TextField
                label="Name"
                variant="outlined"
                onChange={(e) => {
                  setname(event.target.value);
                }}
                value={name}
              />
              <TextField
                label="Description"
                variant="outlined"
                onChange={(e) => {
                  setdesc(event.target.value);
                }}
                value={desc}
              />
              <TextField
                label="Type"
                variant="outlined"
                onChange={(e) => {
                  settype(event.target.value);
                }}
                value={type}
              />
              <TextField
                label="Hp"
                variant="outlined"
                onChange={(e) => {
                  sethp(event.target.value);
                }}
                value={hp}
              />
              <TextField
                label="Attack"
                variant="outlined"
                onChange={(e) => {
                  setatk(event.target.value);
                }}
                value={atk}
              />
              <TextField
                label="Defence"
                variant="outlined"
                onChange={(e) => {
                  setdef(event.target.value);
                }}
                value={def}
              />
            </Stack>
            {message && { message }}
            <Stack>
              <Button onClick={handleClick} variant="contained">
                Add
              </Button>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </>
  );
}

export default CreatePokemon;
