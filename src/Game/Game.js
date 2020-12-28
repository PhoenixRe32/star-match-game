import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarDisplay from '../StarDisplay/StarDisplay';
import NumberPadDisplay from '../NumberPadDisplay/NumberPadDisplay';
import PlayAgain from '../PlayAgain/PlayAgain';
import utils from '../utils/utils';
import './Game.css';

const useGameState = (timeLimit, maxStars) => {
  const [stars, setStars] = useState(utils.random(1, maxStars));
  const [availableNums, setAvailableNums] = useState(utils.range(1, maxStars));
  const [candidateNums, setCandidateNums] = useState([]);
  const [secondsLeft, setSecondsLeft] = useState(timeLimit);

  useEffect(() => {
    console.log({ secondsLeft });

    if (secondsLeft > 0 && availableNums.length > 0) {
      const timerId = setTimeout(() => setSecondsLeft(secondsLeft - 1), 1000);
      return () => clearTimeout(timerId);
    }
  }, [availableNums.length, secondsLeft]);

  const setGameState = (newCandidateNums) => {
    if (utils.sum(newCandidateNums) !== stars) {
      setCandidateNums(newCandidateNums);
    } else {
      const newAvailableNums = availableNums.filter(
        (n) => !newCandidateNums.includes(n)
      );
      setStars(utils.randomSumIn(newAvailableNums, maxStars));
      setAvailableNums(newAvailableNums);
      setCandidateNums([]);
    }
  };

  return {
    stars,
    maxNumber: maxStars,
    availableNums,
    candidateNums,
    secondsLeft,
    setGameState,
  };
};

const Game = (props) => {
  const {
    stars,
    availableNums,
    candidateNums,
    secondsLeft,
    setGameState,
  } = useGameState(props.timeLimit, props.maxStars);

  const candidatesAreWrong = utils.sum(candidateNums) > stars;

  const gameStatus =
    availableNums.length === 0 ? 'won' : secondsLeft === 0 ? 'lost' : 'active';

  const calculateNumberStatus = (number) => {
    if (!availableNums.includes(number)) {
      return 'used';
    }

    if (candidateNums.includes(number)) {
      return candidatesAreWrong ? 'wrong' : 'candidate';
    }

    return 'available';
  };

  const onNumberClick = (number, currentStatus) => {
    if (currentStatus === 'used' || secondsLeft === 0) {
      return;
    }

    const newCandidateNums =
      currentStatus === 'available'
        ? candidateNums.concat(number)
        : candidateNums.filter((cn) => cn !== number);

    setGameState(newCandidateNums);
  };

  return (
    <div className="game">
      <div className="instructions">
        Pick 1 or more numbers that sum to the number of stars
      </div>

      <div className="game-screen">
        <div className="star-screen">
          {gameStatus !== 'active' ? (
            <PlayAgain onClick={props.startNewGame} gameStatus={gameStatus} />
          ) : (
            <StarDisplay numberOfStars={stars} />
          )}
        </div>

        <div className="number-screen">
          <NumberPadDisplay
            maxNumber={props.maxStars}
            calculateNumberStatus={calculateNumberStatus}
            onNumberClick={onNumberClick}
          />
        </div>
      </div>
      <div className="timer">Time Remaining: {Math.ceil(secondsLeft)}</div>
    </div>
  );
};

Game.propTypes = {
  startNewGame: PropTypes.func.isRequired,
  timeLimit: PropTypes.number.isRequired,
  maxStars: PropTypes.number.isRequired,
};

export default Game;
