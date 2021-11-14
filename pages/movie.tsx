import { InputBase } from "@mui/material";
import { useState } from "react";
import type { FC } from 'react'
import { TheHeader } from "../components/TheHeader";
import { InputMovieValue } from "../components/InputMovieValue";

import CancelIcon from '@mui/icons-material/Cancel';

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

  return (
    <div>
    <TheHeader />
      <div id="inputBase">
      <InputBase
        placeholder="映画タイトル入力"
        sx={{ ml: 2, flex: 1 }}
        onChange={handleInputChange}
        value={searchValue}
      />
      { searchValue ?
        <CancelIcon sx={{ ml: 1, mt: -1, my: -1 }} onClick={resetInput} /> : null }
      </div>
    </div>
  )
}

export default Movie;
