import { atom } from 'jotai';
import { type Player } from '@/types/player';

// webSocketの接続状態を管理する
export const webSocketConnectedState = atom(false);

// 現在のターンを管理
export const currentTurnAtom = atom<'player' | 'opponent'>('player');

// プレイヤーとエネミーのHPを管理
export const gameStateAtom = atom({
  player1Hp: 100,
  player2Hp: 100,
});

// ユーザーのステータスを管理する
export const userStatusStateAtom = atom<Player>({
  name: 'user',
  maxHp: 100,
  currentHp: 100,
  maxMp: 100,
  currentMp: 100,
  maxDf: 100,
  currentDf: 100,
});

// エネミーのステータスを管理する
export const enemyStatusStateAtom = atom<Player>({
  name: 'enemy',
  maxHp: 100,
  currentHp: 100,
  maxMp: 100,
  currentMp: 100,
  maxDf: 100,
  currentDf: 100,
});
