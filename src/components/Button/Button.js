import React from 'react';

const Button = (props = {}) => (
  <a>
    {props.value}
  </a>
);

export default Button;

Button.propTypes = {
  value: React.PropTypes.string.isRequired,
};
