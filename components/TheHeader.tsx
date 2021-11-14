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
import dig from  "object-dig"
import { logOut, signInWithGoogle } from "../server/firebase";
import { AuthContext } from "../providers/AuthProvider";
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import { TheFooter } from "../components/TheFooter"
import Link from 'next/link'
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';


export const TheHeader = () => {

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

  const movieButtonRender = () => {
    let movieButton
    if(dig(currentUser, 'currentUser', 'uid')) {
      movieButton = <Button><Link href="/movie"><LocalMoviesIcon style={{ color: 'white' }}/></Link></Button>
    } else {
      return null
    }
    return movieButton
  }

  return (
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
            <Button>
              <Link href="/">
                <div style={{ color: "white", fontSize: "20px" }}>
                  BOOKIFY
                </div>
              </Link>
            </Button>
          </Typography>
          <div>{ movieButtonRender() } </div>
          <div>{ buttonRender() }</div>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
