import { IconButton, InputBase } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import CancelIcon from '@mui/icons-material/Cancel';
import CardContent from '@mui/material/CardContent';

export const InputMovieValue = (props) => {
  const { searchValue, resetInput, handleInputChange, searchMovie } = props;

  return (
    <div id="inputBase">
    <InputBase
      placeholder="映画タイトル入力"
      sx={{ ml: 2, flex: 1 }}
      onChange={handleInputChange}
      value={searchValue}
    />
    { searchValue ?
      <CancelIcon sx={{ ml: 1, mt: -1, my: -1 }} onClick={resetInput} /> : null }
      <IconButton type="submit" size="large"  aria-label="search" edge="end" onClick={searchMovie}>
      <SearchIcon sx={{ mt: -1, my: 3}}/>
      </IconButton>
  </div>
  )
}
