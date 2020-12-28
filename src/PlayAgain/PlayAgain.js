import React from 'react';
import PropTypes from 'prop-types';
import sounds from '../utils/sounds';

const PlayAgain = (props) => {
  const soundfile = sounds[props.gameStatus];
  return (
    <div className="game-done">
      <div
        className="message"
        style={{ color: props.gameStatus === 'lost' ? 'red' : 'green' }}
      >
        {props.gameStatus === 'lost' ? 'Game Over 😭' : 'Nice Work 👍'}
      </div>
      <button onClick={props.onClick}>Play Again</button>
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <audio autoPlay>
        <source src={soundfile} type="audio/mpeg" />
      </audio>
    </div>
  );
};
PlayAgain.propTypes = {
  gameStatus: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default PlayAgain;
