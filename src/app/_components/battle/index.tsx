import { Avatar, Box, LinearProgress, Typography } from '@mui/material';

export default function Battle() {
  const currentHp = 80;
  const maxHp = 100;
  const hpPercentage = (currentHp / maxHp) * 100;

  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          backdropFilter: 'blur(10px)',
          backgroundColor: 'black',
          color: 'white',
          opacity: 0.4,
        }}
      >
        <Box sx={{ width: '50px', height: '50px' }}>
          <Avatar alt="player" src="player.png" sx={{ width: '100%', height: '100%' }} variant="rounded" />
        </Box>
        {/* プレイヤー */}
        <Typography variant="h4">name</Typography>
        {/* HP数 */}
        <Typography variant="body1">
          {currentHp} / {maxHp}
        </Typography>
        {/* HPバー */}
        <LinearProgress
          variant="determinate"
          value={hpPercentage}
          sx={{
            flex: 1,
            height: 10,
            borderRadius: 5,
            transition: 'width 0.5s ease-in-out', // アニメーションを追加
            '& .MuiLinearProgress-bar': {
              bgcolor: hpPercentage > 50 ? 'green' : hpPercentage > 20 ? 'orange' : 'red',
            },
          }}
        />
      </Box>
    </div>
  );
}
