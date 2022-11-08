import React, { useState } from "react";
import Header from "../headerMovieList";
import FilterCard from "../filterMoviesCard";
import PersonList from "../personList";
import Grid from "@mui/material/Grid";

function PersonListPageTemplate({ persons, title, action }) {
  // const [nameFilter, setNameFilter] = useState("");
  // const [genreFilter, setGenreFilter] = useState("0");
  // const genreId = Number(genreFilter);

  // let displayedPersons = persons
  //   .filter((m) => {
  //     return m.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
  //   })
  //   .filter((m) => {
  //     return genreId > 0 ? m.genre_ids.includes(genreId) : true;
  //   });

  let displayedPersons = persons

  return (
    <Grid container sx={{ padding: '20px' }}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={5}>
      
        <PersonList action={action} persons={displayedPersons}></PersonList>
      </Grid>
    </Grid>
  );
}
export default PersonListPageTemplate;