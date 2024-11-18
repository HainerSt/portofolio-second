"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";

export default function SnakeGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const directionRef = useRef<"UP" | "DOWN" | "LEFT" | "RIGHT">("RIGHT");
  const snakeRef = useRef([
    { x: 5, y: 5 },
    { x: 4, y: 5 },
    { x: 3, y: 5 },
    { x: 2, y: 5 },
  ]);
  const foodRef = useRef({ x: 10, y: 10 });
  const gameLoopRef = useRef<number>();

  const moveSnake = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const gridSize = canvas.width / 20;

    const generateFood = () => {
      foodRef.current = {
        x: Math.floor(Math.random() * 20),
        y: Math.floor(Math.random() * 20),
      };
    };

    const drawGame = () => {
      ctx.fillStyle = "#0a0118";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw snake body
      ctx.fillStyle = "#fff";
      snakeRef.current.slice(1).forEach((segment) => {
        ctx.fillRect(segment.x * gridSize, segment.y * gridSize, gridSize - 1, gridSize - 1);
      });

      // Draw snake head
      ctx.fillStyle = "#9333ea";
      ctx.fillRect(snakeRef.current[0].x * gridSize, snakeRef.current[0].y * gridSize, gridSize - 1, gridSize - 1);

      // Draw food
      ctx.fillStyle = "#22c55e";
      ctx.fillRect(foodRef.current.x * gridSize, foodRef.current.y * gridSize, gridSize - 1, gridSize - 1);
    };

    const gameLoop = () => {
      const head = { ...snakeRef.current[0] };

      switch (directionRef.current) {
        case "UP":
          head.y--;
          break;
        case "DOWN":
          head.y++;
          break;
        case "LEFT":
          head.x--;
          break;
        case "RIGHT":
          head.x++;
          break;
      }

      if (
        head.x < 0 ||
        head.x >= 20 ||
        head.y < 0 ||
        head.y >= 20 ||
        snakeRef.current.slice(1).some((segment) => segment.x === head.x && segment.y === head.y)
      ) {
        setGameOver(true);
        return;
      }

      snakeRef.current.unshift(head);

      if (head.x === foodRef.current.x && head.y === foodRef.current.y) {
        setScore((prev) => prev + 1);
        generateFood();
      } else {
        snakeRef.current.pop();
      }

      drawGame();
      gameLoopRef.current = setTimeout(() => {
        requestAnimationFrame(gameLoop);
      }, 180); // Adjusted for a slightly faster speed
    };

    gameLoop();
  }, []);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowUp":
          if (directionRef.current !== "DOWN") directionRef.current = "UP";
          break;
        case "ArrowDown":
          if (directionRef.current !== "UP") directionRef.current = "DOWN";
          break;
        case "ArrowLeft":
          if (directionRef.current !== "RIGHT") directionRef.current = "LEFT";
          break;
        case "ArrowRight":
          if (directionRef.current !== "LEFT") directionRef.current = "RIGHT";
          break;
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    moveSnake();

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
      if (gameLoopRef.current) {
        clearTimeout(gameLoopRef.current);
      }
    };
  }, [moveSnake]);

  const restartGame = useCallback(() => {
    setGameOver(false);
    setScore(0);
    directionRef.current = "RIGHT";
    snakeRef.current = [
      { x: 5, y: 5 },
      { x: 4, y: 5 },
      { x: 3, y: 5 },
      { x: 2, y: 5 },
    ];
    foodRef.current = { x: 10, y: 10 };
    // Clear any existing game loop
    if (gameLoopRef.current) {
      clearTimeout(gameLoopRef.current);
    }
    moveSnake();
  }, [moveSnake]);

  return (
    <div className="relative w-full max-w-[500px] aspect-square">
      <canvas
        ref={canvasRef}
        width={400}
        height={400}
        className="w-full h-full rounded-lg border-2 border-purple-600"
      />
      <div className="absolute top-2 left-2 text-lg font-bold text-white">Score: {score}</div>
      <div className="absolute top-2 right-2 text-lg font-bold text-white cursor-pointer" onClick={restartGame}>
        New Game
      </div>
      {gameOver && (
        <div
          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 cursor-pointer"
          onClick={restartGame}
        >
          <div className="text-2xl font-bold text-white">Game Over! Click to restart</div>
        </div>
      )}
    </div>
  );
}
