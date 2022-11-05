import { configureStore, createSlice } from "@reduxjs/toolkit";

const winningPatterns = [
  [{ row: 0, column: 0 }, { row: 0, column: 1 }, { row: 0, column: 2 }],
  [{ row: 1, column: 0 }, { row: 1, column: 1 }, { row: 1, column: 2 }],
  [{ row: 2, column: 0 }, { row: 2, column: 1 }, { row: 2, column: 2 }],
  [{ row: 0, column: 0 }, { row: 1, column: 1 }, { row: 2, column: 2 }],
  [{ row: 0, column: 2 }, { row: 1, column: 1 }, { row: 2, column: 0 }],
  [{ row: 0, column: 0 }, { row: 1, column: 0 }, { row: 2, column: 0 }],
  [{ row: 0, column: 1 }, { row: 1, column: 1 }, { row: 2, column: 1 }],
  [{ row: 0, column: 2 }, { row: 1, column: 2 }, { row: 2, column: 2 }]
];

const boardSlice = createSlice({
  name: 'board',
  initialState: {
    entries: [
      [ '', '', ''],
      [ '', '', ''],
      [ '', '', ''],
    ],
    turn: 'X',
    winner: '',
  },
  reducers: {
    setEntry: (state, action) => {
      const { row, column } = action.payload;
      state.entries[row][column] = state.turn;
    },
    toggleTurn: (state) => {
      state.turn = (state.turn === 'X' ? 'O' : 'X');
    },
    checkForWinner: (state) => {
      if (winningPatterns.some((pattern: { row: number, column: number }[]) => 
        pattern.every((cell: { row: number, column: number }) => state.entries[cell.row][cell.column] === state.turn)
      )) {
        state.winner = state.turn;
      } else if (state.entries.every((row: string[]) => row.every((value: string) => value !== ''))) {
        state.winner = 'stale mate';
      }
    },
    newGame: (state) => {
      state.entries = [
        [ '', '', ''],
        [ '', '', ''],
        [ '', '', ''],
      ];
      state.winner = '';
    },
  },
});

export const { setEntry, toggleTurn, checkForWinner, newGame } = boardSlice.actions;

export const store = configureStore({
  reducer: {
    board: boardSlice.reducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
