import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import StarRate from "@mui/icons-material/StarRate";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import KnownMovies from "../knownMovies";
import { Grid } from "@mui/material";


const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};
const chip = { margin: 0.5 };

const PersonDetails = ({ person }) => {  // Don't miss this!
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <>
      <Typography variant="h3" component="h3">
       {person.name}
      </Typography>

      <Typography variant="h6" component="p">
         Biography
      </Typography>

      <Typography variant="p" component="p">
         {person.biography}
      </Typography>
      <Typography variant="h6" component="p">
         Known For
      </Typography>
     <Grid>
         {/* <KnownMovies person={person} /> */}
      </Grid>
      <Paper 
        component="ul" 
        sx={{...root}}
      >
        <li>
          <Chip label="diyihang" sx={{...chip}} color="primary" />
        </li>
      
      </Paper>
      <Paper component="ul" sx={{...root}}>
        <Chip icon={<AccessTimeIcon />} label={`dierhang`} />
        
      </Paper>


<Paper component="ul" sx={{...root}}>
<li>
          <Chip label="di 3 hang" sx={{...chip}} color="primary" />
        </li>
        {/* {movie.production_countries.map((g) => (
          <li key={g.name}>
            <Chip label={g.name} sx={{...chip}} />
          </li>
        ))} */}
</Paper>

      

      </>
  );
};
export default PersonDetails ;