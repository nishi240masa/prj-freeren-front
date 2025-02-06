export interface Player {
  name: string;
  maxHp: number;
  currentHp: number;
  maxMp: number;
  currentMp: number;
  maxDf: number;
  currentDf: number;
  Action: string;
  State: string;
}

export interface GameState {
  player1Hp: number;
  player1Mp: number;
  player1Df: number;
  player1Action: string;
  player1State: string;
  player2Hp: number;
  player2Mp: number;
  player2Df: number;
  player2Action: string;
  player2State: string;
  time: number;
}

// 	Player1HP   int    `json:"player1Hp"`
// Player1MP   int    `json:"player1Mp"`
// Player1DF   int    `json:"player1Df"`
// Player1Action string `json:"player1Action"`
// Player2HP   int    `json:"player2Hp"`
// Player2MP   int    `json:"player2Mp"`
// Player2DF   int    `json:"player2Df"`
// Player2Action string `json:"player2Action"`
