/* eslint-disable consistent-return */

import { Box } from '@mui/material';
import Battle from '@/app/_components/battle';
import { type Player } from '@/types/player';

interface PageProps {
  player: Player;
  enemy: Player;
  playerID: string;
}

export default function Page({ player, enemy, playerID }: PageProps) {
  const player1 = player;
  const player2 = enemy;

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
        sx={
          playerID === 'player2'
            ? {
                position: 'absolute',
                top: '15%',
                right: '5%',
                width: { xs: '150px', sm: '300px', md: '400px' },
                height: { xs: '200px', sm: '300px', md: '400px' },
              }
            : {
                position: 'absolute',
                top: '15%',
                right: '10%',
                width: { xs: '150px', sm: '250px', md: '350px' },
                height: { xs: '250px', sm: '400px', md: '500px' },
              }
        }
      >
        <img
          alt="enemy"
          src={playerID === 'player1' ? 'enemy.png' : 'player.png'}
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
          width: { xs: '90%', md: '350px' },
          height: { xs: 'auto', md: '280px' },
        }}
      >
        <Battle player={playerID === 'player1' ? player2 : player1} />
      </Box>

      {/* プレイヤー画像 */}
      <Box
        sx={
          playerID === 'player1'
            ? {
                position: 'absolute',
                bottom: '0%',
                left: '5%',
                width: { xs: '150px', sm: '200px', md: '500px' },
                height: { xs: '200px', sm: '300px', md: '650px' },
              }
            : {
                position: 'absolute',
                bottom: '-5%',
                left: '10%',
                width: { xs: '150px', sm: '250px', md: '350px' },
                height: { xs: '250px', sm: '500px', md: '600px' },
              }
        }
      >
        <img
          alt="player"
          src={playerID === 'player1' ? 'player.png' : 'enemy.png'}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
          }}
        />
      </Box>
      {/* プレイヤーバトルUI */}
      <Box
        sx={{
          position: 'absolute',
          top: '5%',
          left: '5%',
          width: { xs: '90%', md: '350px' },
          height: { xs: 'auto', md: '280px' },
        }}
      >
        <Battle player={playerID === 'player1' ? player1 : player2} />
      </Box>
    </Box>
  );
}
