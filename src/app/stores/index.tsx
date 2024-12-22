import { atom } from 'jotai';
import { type GameState, type Player } from '@/types/player';

// webSocketの接続状態を管理する
export const webSocketConnectedState = atom(false);

// プレイヤーとエネミーのHPを管理
export const gameStateAtom = atom<GameState>({
  player1Hp: 100,
  player1Mp: 100,
  player1Df: 100,
  player1Action: 'none',
  player2Hp: 100,
  player2Mp: 100,
  player2Df: 100,
  player2Action: 'none',
});

// ユーザーのステータスを管理する
export const userStatusStateAtom = atom<Player>({
  name: 'player1',
  maxHp: 100,
  currentHp: 100,
  maxMp: 100,
  currentMp: 100,
  maxDf: 100,
  currentDf: 100,
  Action: 'none',
});

// エネミーのステータスを管理する
export const enemyStatusStateAtom = atom<Player>({
  name: 'player2',
  maxHp: 100,
  currentHp: 100,
  maxMp: 100,
  currentMp: 100,
  maxDf: 100,
  currentDf: 100,
  Action: 'none',
});

// ユーザーのplayerIdを管理する
export const playerIdAtom = atom<string>('');
