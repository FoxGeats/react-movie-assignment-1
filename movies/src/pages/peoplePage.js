import React from "react";
import { getPeople } from "../api/tmdb-api";
import PageTemplate from '../components/templatePeopleListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'


const PeoplePage = (props) => {
  
  const {  data, error, isLoading, isError }  = useQuery('people', getPeople)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const people = data.results;



  return (
    <PageTemplate
    title="People"
    persons={people}
    action={(movie) => {
      return <AddToFavoritesIcon movie={movie} />
    }}
  />
  );
};
export default PeoplePage;
