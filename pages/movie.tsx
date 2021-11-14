import { useState } from "react";
import type { FC } from 'react'
import { TheHeader } from "../components/TheHeader";
import { InputMovieValue } from "../components/InputMovieValue";

import CancelIcon from '@mui/icons-material/Cancel';
import SearchIcon from '@mui/icons-material/Search';
import CardContent from '@mui/material/CardContent';

import axios from "axios";

interface ValueState {
  searchValue: string;
  setSearchValue: string
}

const Movie: FC = () => {

  const [ searchValue, setSearchValue ] = useState('');
  const [ movies, setMovies ] = useState([]);

  const handleInputChange = (e: any): void => {
    setSearchValue(e.target.value);
  }

  const resetInput= (): void => {
    setSearchValue('')
  }

  const searchMovie: any = (searchValue): void => {
    const url = `https://app.rakuten.co.jp/services/api/BooksBook/Search/20130522?applicationId=1086884900424216159&title=${searchValue}&format=json`

    axios.get(url)
    .then((res) => {
      console.log(res.data.Items);

    })
  }

  return (
    <div>
      <TheHeader />
      <InputMovieValue resetInput={resetInput} searchMovie={searchMovie} handleInputChange={handleInputChange} />
    </div>
  )
}

export default Movie;
