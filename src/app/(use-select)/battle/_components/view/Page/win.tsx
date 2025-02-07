import { Box, Button, Link, Stack, Typography } from '@mui/material';

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
      <Stack spacing={2}>
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

        <Link href="/select">
          <Button>
            <Typography variant="h2">タイトルへ</Typography>
          </Button>
        </Link>
      </Stack>
    </Box>
  );
}
