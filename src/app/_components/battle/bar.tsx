import { Box, LinearProgress, Typography } from '@mui/material';

interface Props {
  label: string;
  current: number;
  max: number;
  barColor: string;
  height?: number; // バーの高さを動的に変更できるように
}

export default function Bar({ label, current, max, barColor, height = 10 }: Props) {
  const percentage = (current / max) * 100;

  return (
    <Box sx={{ mb: 2 }}>
      {/* ラベルと数値 */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
        <Typography sx={{ fontWeight: 'bold', color: '#fff' }} variant="body1">
          {label}
        </Typography>
        <Typography sx={{ color: '#fff' }} variant="body1">
          {current}/{max}
        </Typography>
      </Box>

      {/* プログレスバー */}
      <LinearProgress
        sx={{
          height,
          borderRadius: 3,
          backgroundColor: '#444',
          '& .MuiLinearProgress-bar': {
            backgroundColor: barColor,
          },
        }}
        value={percentage}
        variant="determinate"
      />
    </Box>
  );
}
