import { Provider } from 'react-redux';
import TicTacToeBoard from './components/TicTacToeBoard';
import { store } from './store';
function App() {
  return (
    <Provider store={store}>
      <TicTacToeBoard />
    </Provider>
  );
}

export default App;
