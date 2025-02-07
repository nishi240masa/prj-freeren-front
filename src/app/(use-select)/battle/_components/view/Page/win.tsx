import { Box, Button, Typography } from '@mui/material';
import Link from 'next/link';

export default function Win({ playerName }: { playerName: string }) {
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
        {playerName}のWIN!!
      </Typography>

      <Button
        onClick={() => {
          // selectページに遷移
          <Link href="/select" />;
        }}
      >
        <Typography
          sx={{
            color: 'white',
            fontSize: { xs: '2rem', sm: '4rem', md: '6rem' },
            fontWeight: 'bold',
          }}
          variant="h1"
        >
          リトライ
        </Typography>
      </Button>
    </Box>
  );
}
