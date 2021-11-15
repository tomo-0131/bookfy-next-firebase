import { useState } from "react";
import type { FC } from 'react';
// ヘッダー
import { TheHeader } from "../components/TheHeader";
// 映画検索欄
import { InputMovieValue } from "../components/InputMovieValue";
// 映画表示部分
import { MovieList } from "../components/MovieList";
// カスタムフック利用
import { useSearchMovie } from "../components/hooks/useSearchMovie";

const Movie = () => {
  const {isLoading, errorMessage, searchMovie, movies} = useSearchMovie();

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
  // const [ movies, setMovies ] = useState([]);
  // const [ errorMessage, setErrorMessage ] = useState('');
  // const [ isLoading, setIsLoading ] = useState(false)

  // const searchMovie: any = (searchValue) => {
  //   setErrorMessage(null)
  //   setIsLoading(true)
  //   const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=ea6f1704`
  //   axios.get(url)
  //   .then((res) => {
  //     if(res.data) {
  //       console.log(res.data);
  //       setMovies(res.data.Search);
  //       setIsLoading(false)
  //     } else {
  //       setErrorMessage("エラーが発生しました")
  //       setIsLoading(false)
  //     }
  //   }).catch(err=> {
  //     console.error(err)
  //   })
  // }
export default Movie;
