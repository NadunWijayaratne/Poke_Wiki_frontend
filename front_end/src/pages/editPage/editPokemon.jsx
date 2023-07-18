import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { TextField, Typography, Box, Stack, Button } from "@mui/material";

function EditPoke() {
  const { pokemondetails } = useSelector((state) => state.data);
  const navigate = new useNavigate();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [hp, setHp] = useState("");
  const [atk, setAtk] = useState("");
  const [def, setDef] = useState("");
  const [data, setData] = useState(null);
  const [message, setmessage] = useState(false);

  function handleClick() {
    const combine = { name, description, type, hp, atk, def };
    setData(combine);
    checkValidation();
  }

  function checkValidation() {
    if (!name) setmessage({ message: "Add a Name :(", type: "warning" });
    else if (!description)
      setmessage({ message: "Wheres the description", type: "warning" });
    else if (!hp)
      setmessage({ message: "Pokemon needs health", type: "warning" });
    else if (!atk)
      setmessage({ message: "pokemon must attack!!!", type: "warning" });
    else if (!def)
      setmessage({ message: "pokemon must defend themselfs", type: "warning" });
    else editData();
  }

  async function editData() {
    const response = await axios
      .patch(`localhost:3001/pokedata/${pokemondetails._id}`, {
        name: data.name,
        description: data.description,
        hp: +data.hp,
        atk: +data.atk,
        def: +data.def,
      })
      .then(function (response) {
        if (response.status == "200") {
          clearForm();
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const clearForm = () => {
    setName("");
    setDescription("");
    setHp("");
    setAtk("");
    setDef("");
  };

  function goHome() {
    navigate("/");
  }

  useEffect(() => {
    if (pokemondetails) {
      setName(pokemondetails.name);
      setDescription(pokemondetails.description);
      setHp(pokemondetails.hp);
      setAtk(pokemondetails.atk);
      setDef(pokemondetails.def);
    } else {
      navigate("/");
    }
  }, [pokemondetails]);

  return (
    <>
      <Box>
        <Stack>
          <Box>
            <Typography>Edit pokemon details</Typography>
            <Stack>
              <TextField
                label="Name"
                value={name}
                onChange={(e) => {
                  setName(event.target.value);
                }}
              />
              <TextField
                label="Description"
                rows={4}
                value={description}
                onChange={(e) => {
                  setDescription(event.target.value);
                }}
              />
              <TextField
                label="Type"
                value={type}
                onChange={(e) => {
                  setType(event.target.value);
                }}
              />
              <TextField
                label="Hp"
                type="number"
                value={hp}
                onChange={(e) => {
                  setHp(event.target.value);
                }}
              />
              <TextField
                label="Attack"
                type="number"
                value={atk}
                onChange={(e) => {
                  setAtk(event.target.value);
                }}
              />
              <TextField
                label="Defence"
                type="number"
                value={def}
                onChange={(e) => {
                  setDef(event.target.value);
                }}
              />
            </Stack>
            <Stack direction="row" gap={1} display="flex">
              <Button onClick={goHome} variant="outlined">
                Cancel
              </Button>
              <Button onClick={handleClick} varient="contained">
                Edit Pokemon
              </Button>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </>
  );
}

export default EditPoke;
