import React, { useState } from "react";
import { getTVs } from "../api/tmdb-api";
import PageTemplate from '../components/templateTVListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'
import MyPagination from "../components/myPagination";

const TVPage = (props) => {
  const [page, setPage] = useState(1);
  const {  data, error, isLoading, isError }  = useQuery(['Tv', {page}], getTVs)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const totalPages = data.total_pages;
  const TVs = data.results;

  // Redundant, but necessary to avoid app crashing.
  const favorites = TVs.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))
  const addToFavorites = (movieId) => true 

  return (
    <>
    <PageTemplate
    title="Discover TVs"
    TVs={TVs}
    action={(TV) => {
      return <AddToFavoritesIcon movie={TV} />
    }}
  />
 <MyPagination page={Number(page)} setPage={setPage} totalPages={Number(totalPages)}/>
</>
  );
};
export default TVPage;