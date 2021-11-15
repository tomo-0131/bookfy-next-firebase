import { useState } from "react";
import axios from "axios";

export const useSearchMovie = () => {
  const [ movies, setMovies ] = useState([])
  const [ errorMessage, setErrorMessage ] = useState('');
  const [ isLoading, setIsLoading ] = useState(false)

  const searchMovie = (searchValue) => {
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

  return { isLoading, errorMessage, searchMovie, movies }

}
