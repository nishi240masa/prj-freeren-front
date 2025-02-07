'use client';

import { type SelectChangeEvent } from '@mui/material/Select';
import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';
import Page from '../view/Page';
import Countdown from '../view/Page/countdow';
import SelectPlayer from '../view/Page/name';
import Ready from '../view/Page/ready';
import Win from '../view/Page/win';
import { connectWebSocket } from '@/app/api';
import { enemyStatusStateAtom, gameStateAtom, playerIdAtom, userStatusStateAtom } from '@/app/stores';

export default function Index() {
  const [gameState, setGameState] = useAtom(gameStateAtom);
  const [userStatusState, setUserStatusState] = useAtom(userStatusStateAtom); // 状態を参照しない
  const [enemyStatusState, setEnemyStatusState] = useAtom(enemyStatusStateAtom); // 状態を参照しない
  const [player, setPlayer] = useState('none');
  const [playerId, setPlayerId] = useAtom(playerIdAtom);
  const handleChange = (event: SelectChangeEvent) => {
    setPlayer(event.target.value);
  };

  const handleClick = () => {
    setPlayerId(player);
  };

  // WebSocketの接続とステータスの同期を制御
  useEffect(() => {
    if (playerId === '') {
      return;
    }
    // eslint-disable-next-line no-console
    console.log('playerId', playerId);
    connectWebSocket(playerId, setGameState);
  }, [playerId]); // playerId の変更時のみ実行

  // ゲーム状態をステータスに反映
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('gameState', gameState);
    // eslint-disable-next-line no-console
    console.log('Time', gameState.time);

    setUserStatusState((prev) => ({
      ...prev,
      Action: gameState.player1Action,
      currentHp: gameState.player1Hp,
      currentMp: gameState.player1Mp,
      currentDf: gameState.player1Df,
      State: gameState.player1State,
    }));
    // eslint-disable-next-line no-console
    console.log('userStatusState', userStatusState);

    setEnemyStatusState((prev) => ({
      ...prev,
      Action: gameState.player2Action,
      currentHp: gameState.player2Hp,
      currentMp: gameState.player2Mp,
      currentDf: gameState.player2Df,
      State: gameState.player2State,
    }));
    // eslint-disable-next-line no-console
    console.log('enemyStatusState', enemyStatusState);
  }, [gameState, setUserStatusState, setEnemyStatusState]); // gameState の変更時のみ実行

  return (
    <div>
      {playerId === '' && <SelectPlayer handleChange={handleChange} handleClick={handleClick} player={player} />}

      {gameState.player1State === 'death' || gameState.player2State === 'death' ? (
        <Win playerName={gameState.player1State === 'win' ? userStatusState.name : enemyStatusState.name} />
      ) : null}

      {/* stateが1,2がReady, */}
      {gameState.player1State === 'ready' && gameState.player2State === 'ready' ? (
        <Countdown countdown={gameState.time} />
      ) : null}

      {/* stateが1,2両方fightingの場合 */}
      {gameState.player1State === 'fighting' && gameState.player2State === 'fighting' ? (
        <Page enemy={enemyStatusState} player={userStatusState} playerID={playerId} />
      ) : (
        <Ready player1={userStatusState} player2={enemyStatusState} playerID={playerId} />
      )}
    </div>
  );
}
