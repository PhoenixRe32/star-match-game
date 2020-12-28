import React, { useState } from 'react';
import Game from '../Game/Game';
import './App.css';

const App = () => {
  const [gameStatus, setGameStatus] = useState({ gameId: 1, isPlaying: false });
  const [timeLimit, setTimeLimit] = useState(45);
  const [maxStars, setMaxStars] = useState(9);

  const submit = (event) => {
    event.preventDefault();
    setGameStatus({
      ...gameStatus,
      isPlaying: true,
    });
  };
  const startNewGame = () =>
    setGameStatus({
      isPlaying: false,
      gameId: gameStatus.gameId + 1,
    });

  if (!gameStatus.isPlaying) {
    return (
      <div className="App">
        <header className="App-header">Star Match Game</header>
        <form onSubmit={submit}>
          <p>
            <label className="game-options-label" htmlFor="time-limit">
              Time Limit (sec):
            </label>
            <input
              className="number-input"
              type="number"
              name="time-limit"
              min={10}
              step={5}
              max={120}
              value={timeLimit}
              onChange={(event) => setTimeLimit(Number(event.target.value))}
            />
          </p>
          <p>
            <label className="game-options-label" htmlFor="max-stars">
              Maximum stars:
            </label>
            <input
              className="number-input"
              type="number"
              name="max-stars"
              min={9}
              value={maxStars}
              onChange={(event) => setMaxStars(Number(event.target.value))}
            />
          </p>
          <input
            className="submit-button"
            type="submit"
            value="Start Game"
          ></input>
        </form>
      </div>
    );
  }

  return (
    <div className="App">
      <header className="App-header">Star Match Game</header>
      <Game
        key={gameStatus.gameId}
        startNewGame={startNewGame}
        timeLimit={timeLimit}
        maxStars={maxStars}
      />
    </div>
  );
};

export default App;
