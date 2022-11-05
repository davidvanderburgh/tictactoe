import { Dispatch, ReactElement } from "react";
import { RootState, setEntry, toggleTurn, checkForWinner } from "../store";
import { AnyAction } from "redux";
import { useDispatch, useSelector } from "react-redux";
import '../styles/tic-tac-toe-button.css';

const TicTacToeButton = (props: {
  id: string,
  row: number,
  column: number,
}): ReactElement => {
  const dispatch: Dispatch<AnyAction> = useDispatch();
  const entry: string = useSelector((state: RootState) => state.board.entries[props.row][props.column]);
  const winner: string = useSelector((state: RootState) => state.board.winner);
  
  const clickTicTacToeButton = (): void => {
    if (entry === '' && winner === '') {
      dispatch(setEntry({ row: props.row, column: props.column }));
      dispatch(checkForWinner());
      dispatch(toggleTurn());
    }
  };

  return (
    <button
      onClick={clickTicTacToeButton}
      className="tic-tac-toe-button"
      id={props.id}
    >
      {entry}
    </button>
  )
};

export default TicTacToeButton;