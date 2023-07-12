import Pkform from "../components/pkForm";
import Searchbar from "../components/searchBar";
import "../styles/homePage.css";
import Poke_log from "../images/pokemon_logo.png";
import { Scrollbars } from "react-custom-scrollbars";
import { Grid } from "@mui/material";

function Home() {
  return (
    <div className="homePage">
      <Scrollbars style={{ width: "100%", height: "100%" }}>
        <div className="menuBar">
          <img className="pokemon_logo" src={Poke_log} alt="pokemon_logo" />
          <Searchbar className="searchBar" />
        </div>
        <div className="bot">
          <Grid>
            <Pkform />
          </Grid>
        </div>
      </Scrollbars>
    </div>
  );
}

export default Home;
