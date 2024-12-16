'use client';

import { Box, keyframes, Link, Typography } from '@mui/material';

export default function Page() {
  // 点滅アニメーションの設定
  const blink = keyframes`
0%, 100% {
  opacity: 1;
}
50% {
  opacity: 0;
}
`;

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        minHeight: '100vh',
        overflow: 'hidden',

        gap: { xs: 5, sm: 20 },
        pb: 20,
      }}
    >
      {/* 背景 */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
          backgroundImage: 'url(start_img.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'brightness(50%)',
        }}
      />
      <Box>
        {/* タイトル */}
        <Typography
          sx={{
            fontSize: '4rem',
            fontFamily: "'Cinzel Decorative', serif",
            textShadow: '0px 0px 20px rgba(0, 123, 255, 1)',
            color: '#69bff8',
          }}
        >
          Project Freeren
        </Typography>
      </Box>

      <Box>
        {/* スタートリンク */}
        <Link
          href="/select"
          underline="none"
          sx={{
            fontSize: '2rem',
            fontWeight: 'bold',
            color: '#fff',
            textShadow: '0px 0px 10px rgba(255, 255, 255, 0.8)',
            // 点滅させる
            animation: `${blink} 1.5s infinite`,

            '&:hover': {
              color: 'primary.main',
              textShadow: '0px 0px 15px rgba(0, 123, 255, 1)',
            },
          }}
        >
          Start
        </Link>
      </Box>
    </Box>
  );
}
