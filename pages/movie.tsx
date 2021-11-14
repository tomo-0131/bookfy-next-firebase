import { useState } from "react";
import type { FC } from 'react'
import { TheHeader } from "../components/TheHeader";
import { InputMovieValue } from "../components/InputMovieValue";

import { MovieList } from "../components/MovieList";

import axios from "axios";

const Movie: FC = () => {

  const [ movies, setMovies ] = useState([]);
  const [ errorMessage, setErrorMessage ] = useState('');
  const [ isLoading, setIsLoading ] = useState(false)

  const searchMovie: any = (searchValue) => {
    setErrorMessage(null)
    setIsLoading(true)
    const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=ea6f1704`
    axios.get(url)
    .then((res) => {
      if(res.data) {
        console.log(res.data);
        setMovies(res.data.Search);
        setIsLoading(false)
      } else {
        setErrorMessage("エラーが発生しました")
        setIsLoading(false)
      }
    }).catch(err=> {
      console.error(err)
    })
  }

  return (
    <div>
      <TheHeader />
      <InputMovieValue searchMovie={searchMovie} />
      { isLoading && !errorMessage ? ( <p>Loading...</p> )
        : errorMessage ? ( <p>{errorMessage}</p> )
        : ( movies.map((movie) => (
            <MovieList key={movie.imdbID} movie={movie} />
          ))
        )
      }
    </div>
  )
}

export default Movie;
