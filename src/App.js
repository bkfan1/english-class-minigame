import GameApp from './components/GameApp';
import './index.css';
import 'animate.css';
import { GameProvider } from './context/GameContext';

function App() {
  return (
    <div className="App">
      <GameProvider>
      <GameApp />

      </GameProvider>

    </div>
  );
}

export default App;
