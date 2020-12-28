import React from 'react';
import PropTypes from 'prop-types';
import NumberPad from './NumberPad';
import utils from '../utils/utils';

const buildNumberPad = (number, onClick, numberStatus) => (
  <NumberPad
    key={number}
    number={number}
    onClick={onClick}
    status={numberStatus}
  />
);

const NumberPadDisplay = (props) => (
  <>
    {utils
      .range(1, props.maxNumber)
      .map((number) =>
        buildNumberPad(number, props.onNumberClick, props.calculateNumberStatus(number))
      )}
  </>
);

NumberPadDisplay.propTypes = {
  maxNumber: PropTypes.number.isRequired,
  onNumberClick: PropTypes.func.isRequired,
  calculateNumberStatus: PropTypes.func.isRequired,
};

export default NumberPadDisplay;
