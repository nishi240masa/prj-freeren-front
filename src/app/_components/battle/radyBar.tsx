import { Box, Typography } from '@mui/material';

import { type Player } from '@/types/player';

export default function RadyBar({ player }: { player: Player }) {
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

        {/* State */}
        {player.State === 'noReady' || player.State === '' || player.State === 'fighting' ? (
          <Typography sx={{ color: '#fff', mb: 2 }} variant="h1">
            準備中
          </Typography>
        ) : (
          <Typography sx={{ color: '#00ff7f', mb: 2 }} variant="h1">
            準備完了
          </Typography>
        )}
      </Box>
    </Box>
  );
}
