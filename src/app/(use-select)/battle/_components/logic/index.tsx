'use client';

import { type SelectChangeEvent } from '@mui/material/Select';
import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';
import Page from '../view/Page';
import SelectPlayer from '../view/Page/name';
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

    setUserStatusState((prev) => ({
      ...prev,
      Action: gameState.player1Action,
      currentHp: gameState.player1Hp,
      currentMp: gameState.player1Mp,
      currentDf: gameState.player1Df,
    }));
    // eslint-disable-next-line no-console
    console.log('userStatusState', userStatusState);

    setEnemyStatusState((prev) => ({
      ...prev,
      Action: gameState.player2Action,
      currentHp: gameState.player2Hp,
      currentMp: gameState.player2Mp,
      currentDf: gameState.player2Df,
    }));
    // eslint-disable-next-line no-console
    console.log('enemyStatusState', enemyStatusState);
  }, [gameState, setUserStatusState, setEnemyStatusState]); // gameState の変更時のみ実行

  return (
    <div>
      {playerId === '' && <SelectPlayer handleChange={handleChange} handleClick={handleClick} player={player} />}
      <Page enemy={enemyStatusState} player={userStatusState} playerID={playerId} />
    </div>
  );
}
