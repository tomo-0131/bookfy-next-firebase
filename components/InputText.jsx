
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import CancelIcon from '@mui/icons-material/Cancel';
import CardContent from '@mui/material/CardContent';

import { useState } from 'react'

export const InputText = ({searchRakutenBooks}) => {

  const [ searchText, setSearchText ] = useState("")

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  const resetSearchField = () => {
    setSearchText('')
  }

  const callSearchFunc = (e) => {
    e.preventDefault();
    // searchMovie(searchText);
    searchRakutenBooks(searchText);
    // resetSearchField()
  }



  return (
    <div id="inputBase">
      <InputBase
        id="inputBase"
        sx={{ ml: 2, flex: 1 }}
        placeholder="映画のタイトルを入力"
        value={searchText}
        onChange={handleChange}
      />
      { searchText ? <CancelIcon  sx={{ mt: -1, px: 1, my: -1}} type="button" onClick={resetSearchField}/>  : null }
      <IconButton type="submit" size="large"  aria-label="search" edge="end" onClick={callSearchFunc}>
        <SearchIcon sx={{ mt: -1, my: 3}}/>
      </IconButton>
      <CardContent id="searchResult">{`${searchText}の検索結果`}</CardContent>
    </div>
  )
}
