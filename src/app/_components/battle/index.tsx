import { Box, Typography } from '@mui/material';
import Bar from './bar';

import { type Player } from '@/types/player';

export default function Battle({ player }: { player: Player }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 4,
        boxShadow: '0 4px 10px rgba(0,0,0,0.5)',
        backdropFilter: 'blur(10px)',
      }}
    >
      {/* プレイヤーの情報 */}
      <Box sx={{ flex: 1 }}>
        <Typography sx={{ fontWeight: 'bold', color: '#fff', mb: 2 }} variant="h5">
          {player.name}
        </Typography>

        {/* 各ステータスバー */}
        <Bar barColor="#66FF66" current={player.currentHp} height={20} label="HP" max={player.maxHp} />
        <Bar barColor="#6699FF" current={player.currentMp} height={20} label="MP" max={player.maxMp} />
        <Bar barColor="#FF6666" current={player.currentDf} height={20} label="DP" max={player.maxDf} />
      </Box>
    </Box>
  );
}
