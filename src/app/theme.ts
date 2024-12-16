'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#006ad5', // 深い青色 (夜空のような色)
    },
    secondary: {
      main: '#69bff8', // 水色 (透明感のある淡いブルー)
    },
    background: {
      default: '#001233', // 夜空のような深い青色
      paper: '#003366', // 落ち着いたメタリック風の青
    },
    text: {
      primary: '#d8e3e7', // 明るいシルバー系 (読みやすい白っぽい色)
      secondary: '#89a1b8', // 薄い青灰色 (控えめな装飾色)
    },
  },
  typography: {
    fontFamily: '"Cinzel Decorative", "serif"', // ファンタジーに合うエレガントな書体
    h1: {
      fontSize: '5rem', // タイトル用にサイズアップ
      fontWeight: 'bold',
      textShadow: '0px 0px 20px rgba(0, 123, 255, 1)',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 'bold',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.8, // 読みやすい行間を確保
    },
  },
});

export default theme;
