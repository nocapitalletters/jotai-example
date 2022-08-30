import './App.css';
import GamesList from './components/list';
import AddGameButton from './components/button';
import { Provider } from 'jotai'
import NewGameInput from './components/new-game-input';
import NewGameText from './components/new-game-text';

function App() {
  return (
      <Provider>
        <GamesList />
        <h1>Add new game:</h1>
        <NewGameInput />
        <NewGameText />
        <AddGameButton />
      </Provider>
  );
}

export default App;
