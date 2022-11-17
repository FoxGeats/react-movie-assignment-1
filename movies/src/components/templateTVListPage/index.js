import React, { useState } from "react";
import Header from "../headerMovieList";
import FilterCard from "../filterMoviesCard";
import TVList from "../TVList";
import Grid from "@mui/material/Grid";

function TVListPageTemplate({ TVs, title, action }) {
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



  return (
    <Grid container sx={{ padding: '20px' }}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={5}>
      
        <TVList action={action} TVs={TVs}></TVList>
      </Grid>
    </Grid>
  );
}
export default TVListPageTemplate;