import { Dispatch, ReactElement } from "react";
import TicTacToeButton from "./TicTacToeButton";
import { newGame, RootState } from '../store';
import { useDispatch, useSelector } from "react-redux";
import { AnyAction } from "redux";
import '../styles/tic-tac-toe-board.css';

const TicTacToeBoard = (): ReactElement => {
  const dispatch: Dispatch<AnyAction> = useDispatch();
  const turn: string = useSelector((state: RootState) => state.board.turn);
  const winner: string = useSelector((state: RootState) => state.board.winner);

  const clickNewGameButton = (): void => {
    dispatch(newGame());
  }

  return (
    <div className="container">
      <div className="grid">
        <div className="row">
          <TicTacToeButton id="block-1" row={0} column={0}/>
          <TicTacToeButton id="block-2" row={1} column={0}/>
          <TicTacToeButton id="block-3" row={2} column={0}/>
        </div>
        <div className="row">
          <TicTacToeButton id="block-4" row={0} column={1}/>
          <TicTacToeButton id="block-5" row={1} column={1}/>
          <TicTacToeButton id="block-6" row={2} column={1}/>
        </div>
        <div className="row">
          <TicTacToeButton id="block-7" row={0} column={2}/>
          <TicTacToeButton id="block-8" row={1} column={2}/>
          <TicTacToeButton id="block-9" row={2} column={2}/>
        </div>
      </div>
      <section className="hud">
        { winner === '' 
          ? <div>Turn: {turn}</div>
          : <>
              <div>Winner: {winner}</div>
              <button onClick={clickNewGameButton}>New game</button>
            </>
        }
      </section>
    </div>
  );
};

export default TicTacToeBoard;
