'use client';

import { useEffect, useRef } from 'react';
import * as PIXI from 'pixi.js';

const GameCanvas = () => {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // PIXIアプリケーションを作成
    const app = new PIXI.Application({
      width: 800, // ゲーム画面の幅
      height: 600, // ゲーム画面の高さ
      backgroundColor: 0x1099bb,
    });

    // キャンバスをDOMに追加
    if (canvasRef.current) {
      canvasRef.current.appendChild(app.view);
    }

    // プレイヤーのスプライトを追加
    const player = PIXI.Sprite.from('/player.png'); // publicフォルダ内の画像
    player.anchor.set(0.5); // 中心を基準
    player.x = app.screen.width / 2;
    player.y = app.screen.height / 2;
    app.stage.addChild(player);

    // 簡単なアニメーション
    app.ticker.add(() => {
      player.rotation += 0.01; // プレイヤーが回転する
    });

    return () => {
      app.destroy(true, true); // クリーンアップ
    };
  }, []);

  return <div ref={canvasRef}></div>;
};

export default GameCanvas;
