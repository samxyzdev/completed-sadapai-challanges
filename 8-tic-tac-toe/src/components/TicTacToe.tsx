import { useEffect, useState } from "react";

const winningPosition = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2],
];

// 1. Sahi Types Define Kiye
type PlayerValue = "X" | "O" | null;
type BoardType = PlayerValue[];

function checkWinnner(board: BoardType) {
  for (let i = 0; i < winningPosition.length; i++) {
    const [a, b, c] = winningPosition[i];
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
}

export function TicTacToe() {
  const [board, setBoard] = useState<BoardType>(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  const [gameScore, setGameScore] = useState([
    { playerName: "X", playerScore: 0 },
    { playerName: "O", playerScore: 0 },
    { playerName: "=", playerScore: 0 },
  ]);
  const [gameStatus, setGameStatus] = useState("Playing");

  const winner = checkWinnner(board);
  const isDraw = !winner && board.every((item) => item !== null);

  useEffect(() => {
    if (winner) {
      setGameScore((prev) =>
        prev.map((player) =>
          player.playerName === winner
            ? { ...player, playerScore: player.playerScore + 1 }
            : player,
        ),
      );
      setGameStatus("Winner 🎉");
    } else if (isDraw) {
      setGameScore((prev) =>
        prev.map((player) =>
          player.playerName === "="
            ? { ...player, playerScore: player.playerScore + 1 }
            : player,
        ),
      );
      setGameStatus("Draw");
    }
  }, [winner, isDraw]);

  function handleClick(index: number) {
    if (board[index] || winner) return;
    const newBoard = [...board];
    newBoard[index] = isXTurn ? "X" : "O";
    setBoard(newBoard);
    setIsXTurn(!isXTurn);
  }

  function handleRematch() {
    setBoard(Array(9).fill(null));
  }

  return (
    <div>
      <GameStatus status={gameStatus} />
      <div className="flex justify-center items-center gap-4">
        {gameScore.map(({ playerName, playerScore }) => (
          <GameScore playerName={playerName} playerScore={playerScore} />
        ))}
      </div>

      <div className="grid grid-cols-3 grid-rows-3 max-w-fit m-auto pt-4">
        {board.map((item, index) => (
          <Squre value={item} onClick={() => handleClick(index)} />
        ))}
      </div>
      <div className="flex justify-center items-center">
        <button
          onClick={handleRematch}
          className="border px-4 py-2 mt-8 hover:cursor-pointer"
        >
          Rematch
        </button>
      </div>
    </div>
  );
}

function GameStatus({ status }: { status: string }) {
  return (
    <div>
      <p className="text-center text-lg font-semibold pt-4">Status: {status}</p>
    </div>
  );
}

function GameScore({
  playerName,
  playerScore,
}: {
  playerName: string;
  playerScore: number;
}) {
  return (
    <div className="text-center pt-4 font-semibold text-lg">
      <p>{playerName}</p>
      <p>
        <span>{playerScore}</span> Wins
      </p>
    </div>
  );
}

function Squre({
  value,
  onClick,
}: {
  value: string | null;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className="border w-20 h-20 text-center flex justify-center items-center text-2xl"
    >
      {value}
    </div>
  );
}
