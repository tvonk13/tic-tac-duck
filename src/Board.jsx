import Square from "./Square";
import { useState } from "react";
import calculateWinner from "./calculateWinner";

export default function Board() {
  const [currentTurn, setCurrentTurn] = useState("X");
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [winner, setWinner] = useState(null);

  const handleClick = (index) => {
    const currentValue = squares[index];
    if (currentValue === null && winner === null) {
      squares[index] = currentTurn;
      setSquares(squares);
      setCurrentTurn(currentTurn === "X" ? "O" : "X");
      setWinner(calculateWinner(squares));
    }
  };

  const renderSquare = (index) => (
    <Square
      value={squares[index]}
      onClick={() => handleClick(index)}
      key={index}
    />
  );

  return (
    <div className="board">
      <div style={{ marginBottom: "10px" }}>Current Turn: {currentTurn}</div>
      <div style={{ marginBottom: "10px" }}>Winner: {winner || "-"}</div>
      <div className="board-rows">
        {squares.map((_square, index) => renderSquare(index))}
      </div>
    </div>
  );
}
