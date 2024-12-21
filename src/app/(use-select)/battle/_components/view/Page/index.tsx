'use client';

import { Box, Typography } from '@mui/material';
import Battle from '@/app/_components/battle';
import { type Player } from '@/types/player';

interface PageProps {
  player: Player;
  enemy: Player;
}

export default function Page({ player, enemy }: PageProps) {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        backgroundImage: 'url(battle.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* エネミー画像 */}
      <Box
        sx={{
          position: 'absolute',
          top: '15%',
          right: '10%',
          width: { xs: '150px', sm: '250px', md: '350px' },
          height: { xs: '250px', sm: '400px', md: '500px' },
        }}
      >
        <img
          alt="enemy"
          src="enemy.png"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
          }}
        />
      </Box>
      {/* エネミーバトルUI */}
      <Box
        sx={{
          position: 'absolute',
          bottom: '5%',
          right: '5%',
          width: { xs: '90%', md: '350px' }, // レスポンシブ対応
          height: { xs: 'auto', md: '280px' },
        }}
      >
        <Battle player={enemy} />
      </Box>

      {/* プレイヤー画像 */}
      <Box
        sx={{
          position: 'absolute',
          bottom: '0%',
          left: '5%',
          width: { xs: '150px', sm: '200px', md: '500px' },
          height: { xs: '200px', sm: '300px', md: '650px' },
        }}
      >
        <img
          alt="player"
          src="player.png"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
          }}
        />
      </Box>
      {/* playerバトルUI */}
      <Box
        sx={{
          position: 'absolute',
          top: '5%',
          left: '5%',
          width: { xs: '90%', md: '350px' }, // レスポンシブ対応
          height: { xs: 'auto', md: '280px' },
        }}
      >
        <Battle player={player} />
      </Box>

      {/* メッセージバー */}
      <Box
        sx={{
          position: 'absolute',
          bottom: '3%', // 少し下に配置
          left: '50%',
          transform: 'translateX(-50%)',
          width: '90%',
          maxWidth: '700px',
          height: '12%',
          borderRadius: 4,
          boxShadow: '0 4px 10px rgba(0,0,0,0.5)',
          backgroundColor: 'rgba(0, 0, 0, 0.85)',
          border: '1px solid #aaa',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 1,
        }}
      >
        <Typography
          sx={{
            color: 'white',
            textAlign: 'center',
            fontSize: { xs: '0.9rem', sm: '1rem', md: '1.2rem' },
            fontWeight: 'bold',
          }}
          variant="body1"
        >
          ここにメッセージを表示する。
        </Typography>
      </Box>
    </Box>
  );
}
