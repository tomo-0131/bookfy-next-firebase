import { IconButton, InputBase } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import CancelIcon from '@mui/icons-material/Cancel';
import CardContent from '@mui/material/CardContent';
import { useState } from "react";

export const InputMovieValue = (props) => {
  const { searchMovie } = props;
  const [ searchValue, setSearchValue ] = useState('');

  const resetInput= () => {
    setSearchValue('')
    location.reload()
  }
  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  }

  const callMovieFunc = (e) => {
    e.preventDefault();
    searchMovie(searchValue);
  }

  return (
    <div>
      <InputBase
        id="inputBase"
        placeholder="映画タイトル入力"
        sx={{ ml: 2, flex: 1 }}
        onChange={handleInputChange}
        value={searchValue}
      />
      { searchValue ?
        <CancelIcon type="button" sx={{ ml: 1, mt: -1, my: -1 }} onClick={resetInput} /> : null }
        <IconButton type="submit" size="large" aria-label="search" edge="end" onClick={callMovieFunc}>
          <SearchIcon sx={{ mt: -1, my: 3}}/>
        </IconButton>
        { searchValue ? <CardContent>{`${searchValue}の検索結果一覧`}</CardContent> : null}
  </div>
  )
}
