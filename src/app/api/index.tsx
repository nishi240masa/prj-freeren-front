// Assuming SetAtom is from 'jotai'
import { type GameState } from '@/types/player';

let socket: WebSocket | null = null;

// WebSocketの接続を初期化
export const connectWebSocket = (playerId: string, setGameState: (gameState: GameState) => void) => {
  socket = new WebSocket(`wss://prj-freeren-back.onrender.com/player/ws?player=${playerId}`);

  socket.onopen = () => {
    // eslint-disable-next-line no-console
    console.log('WebSocket connected');
  };

  socket.onmessage = (event) => {
    const gameState = JSON.parse(event.data as string) as GameState;

    // eslint-disable-next-line no-console
    console.log('gameState', gameState);

    // ゲームの状態を更新
    setGameState(gameState);
  };
};

// WebSocketの接続を終了
export const closeWebSocket = () => {
  if (socket != null) {
    socket.close();
  }
};

// アクションを送信
export const sendAction = (action: { action: string; target: string; damage: number }) => {
  if (socket != null && socket.readyState === WebSocket.OPEN) {
    socket.send(JSON.stringify(action));
  } else {
    console.error('WebSocket is not connected');
  }
};
