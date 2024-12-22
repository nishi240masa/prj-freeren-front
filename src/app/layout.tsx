// app/layout.tsx
import './globals.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme';

export const metadata = {
  title: 'prg-flelen',
  description: 'prg-flelen',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Hina+Mincho&family=Kiwi+Maru&family=Noto+Sans+JP:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
