'use client';

import Battle from '@/app/_components/battle';
import { Box, keyframes, Link, Typography } from '@mui/material';

export default function Page() {
  return (
    <Box
      sx={{
        height: '100vh',

        backgroundImage: 'url(battle.png)',
      }}
    >
      <Battle />
    </Box>
  );
}
