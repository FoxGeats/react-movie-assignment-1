import React from "react";
import { useParams } from 'react-router-dom';
import PersonDetails from "../components/personDetails/";
import PageTemplate from "../components/templatePeoplePage";
//import useMovie from "../hooks/useMovie";
import { getPerson } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'
import KnownMovies from "../components/knownMovies";
import { useLocation } from "react-router-dom";
import { getPeople } from "../api/tmdb-api";
import { useQueries } from "react-query";

const PersonDetailsPage = (props) => {
  const { id } = useParams();

  const location = useLocation()

  const { data: person, error, isLoading, isError } = useQuery(
    ["persond", { id: id }],
    getPerson
  );


   
  
console.log(person)

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
const people=location.state;
console.log('test',people)

  return (
    <>
      {person ? (
        <>
          <PageTemplate person={person}>
            <PersonDetails person={person} />
           <KnownMovies person={people}/>
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};


export default PersonDetailsPage;