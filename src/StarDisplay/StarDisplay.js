import React from 'react';
import PropTypes from 'prop-types';
import Star from './Star';
import utils from '../utils/utils';

const buildStar = (starId) => <Star key={starId} />;

const StarDisplay = (props) => (
  <>{utils.range(1, props.numberOfStars).map(buildStar)}</>
);

StarDisplay.propTypes = {
  numberOfStars: PropTypes.number.isRequired,
};

export default StarDisplay;
