import { Box, Typography } from '@mui/material';

export default function Countdown({ countdown }: { countdown: number }) {
  // カウントダウン中はオーバーレイでカウントを表示
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
      }}
    >
      <Typography
        sx={{
          color: 'white',
          fontSize: { xs: '4rem', sm: '6rem', md: '8rem' },
          fontWeight: 'bold',
        }}
        variant="h1"
      >
        {countdown}
      </Typography>
    </Box>
  );
}
