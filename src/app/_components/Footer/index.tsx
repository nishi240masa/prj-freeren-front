import { Typography } from '@mui/material';

export default function Footer() {
  return (
    <div>
      <Typography
        sx={{
          bottom: 10,
          width: '100%',
          textAlign: 'center',
          fontSize: '0.9rem',
          color: '#ccc',
        }}
      >
        © 2024 Project Freeren
      </Typography>
    </div>
  );
}
