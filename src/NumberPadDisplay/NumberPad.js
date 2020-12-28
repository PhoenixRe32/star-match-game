import React from 'react';
import PropTypes from 'prop-types';
import colors from '../utils/colors';
import sounds from '../utils/sounds';
import './NumberPad.css';

const NumberPad = (props) => {
  const soundfile = sounds[props.status];

  const audioTag = soundfile ? ( // eslint-disable-next-line jsx-a11y/media-has-caption
    <audio autoPlay>
      <source src={soundfile} type="audio/mpeg" />
    </audio>
  ) : (
    <span></span>
  );
  return (
    <button
      className="number"
      style={{ backgroundColor: colors[props.status] }}
      onClick={() => props.onClick(props.number, props.status)}
    >
      {props.number}
      {audioTag}
    </button>
  );
};
NumberPad.propTypes = {
  status: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default NumberPad;
