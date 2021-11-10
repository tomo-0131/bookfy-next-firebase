import { useContext, useState } from "react";
import axios from 'axios';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { DescriptionModal } from '/components/DescriptionModal'
import { InputText } from "/components/InputText";
// import { MovieList } from "./components/MovieList";
import { BookList } from "../components/BookList";
import dig from  "object-dig"
import { AuthProvider } from "/providers/AuthProvider";
import { AuthContext } from "/providers/AuthProvider";
import { logOut, signInWithGoogle } from "/server/firebase";
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';

export default function App() {

  // const [movies, setMovies] = useState([]);
  const [ books, setBooks ] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage ] = useState('');
  const [searchText, setSearchText] = useState("")
  const currentUser = useContext(AuthContext);

  // ログイン・ログアウト表示
  const buttonRender = () => {
    let buttonDom
    if( dig(currentUser, 'currentUser', 'uid') ) {
      buttonDom = <Button  style={{ color: 'white' }} startIcon={<LogoutIcon />} onClick={logOut}>LOGOUT</Button>
    } else {
      buttonDom = <Button  style={{ color: 'white' }} startIcon={<LoginIcon />} onClick={signInWithGoogle}>LOGIN</Button>
    }
    return buttonDom
  }

  const bookRender = () => {
    let bookDom
    if(dig(currentUser, 'currentUser', 'uid')) {
      bookDom =
      <div>
        <Paper component="form" sx={{ p: '5px 4px', display: 'flex' }}>
          <InputText
            searchRakutenBooks={searchRakutenBooks}
          />
        </Paper>
        <div className="books">
          <div className="books">
            {isLoading && !errorMessage ? (
              <span>Loading...</span>
            ) : errorMessage ? (
              <div>{ errorMessage }</div>
            ) : (
              books.map((book, index) => (
                <BookList key={`${index} - ${book.Item.title}`} book={book} />
              ))
            )}
          </div>
        </div>
      </div>
    } else {
      return null
    }
    return bookDom
  }

  // 楽天API 書籍検索
  const searchRakutenBooks = (searchText) => {
    setIsLoading(true);
    setErrorMessage(null);
    const encodeUrl = encodeURI(searchText)
    console.log(encodeUrl)
    axios.get(`https://app.rakuten.co.jp/services/api/BooksBook/Search/20130522?applicationId=1086884900424216159&title=${encodeUrl}&format=json`)
    .then((res)=>{
      if(res.data) {
        setBooks(res.data.Items)
        console.log(res.data)
        setIsLoading(false);
      } else {
        setErrorMessage("エラーが発生しました")
        setIsLoading(false)
      }
    })
  }

  return (
    <>
    <AuthProvider>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="info">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              BOOKIFY
            </Typography>
            <div>{ buttonRender() }</div>
          </Toolbar>
        </AppBar>
      </Box>
      {bookRender()}
    </AuthProvider>
    </>
  );
}
