'use client';

import { useAtom } from 'jotai';
import { useEffect } from 'react';
import Page from '../view/Page';
import { connectWebSocket } from '@/app/api';
import { enemyStatusStateAtom, gameStateAtom, userStatusStateAtom } from '@/app/stores';

export default function index() {
  const [gameState, setGameState] = useAtom(gameStateAtom);
  const [userStatusState, setUserStatusState] = useAtom(userStatusStateAtom);
  const [enemyStatusState, setEnemyStatusState] = useAtom(enemyStatusStateAtom);

  // WebSocketの接続とステータスの同期を制御
  useEffect(() => {
    connectWebSocket('player1', setGameState);
  }, []); // 初回マウント時のみ実行

  // ゲーム状態をステータスに反映
  useEffect(() => {
    console.log(gameState.player1Hp);
    setUserStatusState((prev) => ({ ...prev, currentHp: gameState.player1Hp }));
    console.log(gameState.player2Hp);
    setEnemyStatusState((prev) => ({ ...prev, currentHp: gameState.player2Hp }));
  }, [gameState, setUserStatusState, setEnemyStatusState]); // gameState が変更されたときに実行

  return (
    <div>
      <Page enemy={enemyStatusState} player={userStatusState} />
    </div>
  );
}
