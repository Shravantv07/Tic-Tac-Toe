import "./Tictactoe.css";
import circle from "../assets/circle.png";
import cross from "../assets/cross.png";
import { useState } from "react";

const data = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const Tictactoe = () => {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [isxturn, setxturn] = useState(true);
  const [showmsg, useshowmsg] = useState(false);
  const [winmsg, usewinmsg] = useState(false);
  const [winner, setWinner] = useState("");
  const [draw, isdraw] = useState(false);

  const click = (idx) => {
    if (winmsg || draw) return;

    if (board[idx] !== "") {
      useshowmsg(true);
      return;
    }

    useshowmsg(false);

    const newBoard = [...board];

    if (isxturn) {
      newBoard[idx] = cross;
      setxturn(false);
    } else {
      newBoard[idx] = circle;
      setxturn(true);
    }

    setBoard(newBoard);

    for (let i = 0; i < data.length; i++) {
      const idx1 = data[i][0];
      const idx2 = data[i][1];
      const idx3 = data[i][2];

      if (
        newBoard[idx1] !== "" &&
        newBoard[idx1] === newBoard[idx2] &&
        newBoard[idx2] === newBoard[idx3]
      ) {
        setWinner(isxturn ? "X" : "O");
        usewinmsg(true);
        return;
      }
    }
    if (newBoard.every((cell) => cell !== "")) {
      isdraw(true);
    }
  };

  const refresh = () => {
    setBoard(Array(9).fill(""));
    setxturn(true);
    useshowmsg(false);
    usewinmsg(false);
    setWinner("");
    isdraw(false);
  };

  return (
    <div className="container">
      <h1 className="title">
        Tic Tac Toe game in <span>React</span>
      </h1>

      <div className="board">
        <div className="row1">
          <div className="boxes" onClick={() => click(0)}>
            {board[0] && <img className="xo" src={board[0]} alt="" />}
          </div>

          <div className="boxes" onClick={() => click(1)}>
            {board[1] && <img className="xo" src={board[1]} alt="" />}
          </div>

          <div className="boxes" onClick={() => click(2)}>
            {board[2] && <img className="xo" src={board[2]} alt="" />}
          </div>
        </div>

        <div className="row2">
          <div className="boxes" onClick={() => click(3)}>
            {board[3] && <img className="xo" src={board[3]} alt="" />}
          </div>

          <div className="boxes" onClick={() => click(4)}>
            {board[4] && <img className="xo" src={board[4]} alt="" />}
          </div>

          <div className="boxes" onClick={() => click(5)}>
            {board[5] && <img className="xo" src={board[5]} alt="" />}
          </div>
        </div>

        <div className="row3">
          <div className="boxes" onClick={() => click(6)}>
            {board[6] && <img className="xo" src={board[6]} alt="" />}
          </div>

          <div className="boxes" onClick={() => click(7)}>
            {board[7] && <img className="xo" src={board[7]} alt="" />}
          </div>

          <div className="boxes" onClick={() => click(8)}>
            {board[8] && <img className="xo" src={board[8]} alt="" />}
          </div>
        </div>
      </div>

      <button className="reset" onClick={refresh}>
        Reset
      </button>

      {showmsg && (
        <div className="error">
          Please press an <span>unoccupied</span> space
        </div>
      )}

      {winmsg && (
        <div className="won">
          Congratulations <span>{winner}</span> won!
        </div>
      )}
      {draw && (
        <div className="draw">
          It's a <span>draw</span>
        </div>
      )}
    </div>
  );
};

export default Tictactoe;
