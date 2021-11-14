import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export const TheFooter = () => {
  return (
    <footer className="footer-detail-container">
      <div className="footer-detail-container--inner center-box">
        <div className="footer-detail-top--inner flex-row">
          {/* <img className="footer-detail-logo" src={logo} alt="ロゴ画像" /> */}
          <div className="copy-detail arial">© 2021 Tomoyuki Kumagai</div>
        </div>
        <div className="footer-detail-middle--inner flex-row">
          <div className="footer-detail-menu-text">
            <a className="hover1" href="/policy" target="_blank" rel="noreferrer noopener">
              特定商取引法に基づく表記
            </a>
            <a className="hover1" href="/policy" target="_blank" rel="noreferrer noopener">
              プライバシーポリシー
            </a>
            <a className="hover1" href="/policy" target="_blank" rel="noreferrer noopener">
              会社概要
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
