import React from 'react';

import styles from './Button.scss';

const Button = (props = {}) => (
  <a className={`${styles.button} btn btn-default`}>
    {props.value}
  </a>
);

export default Button;

Button.propTypes = {
  value: React.PropTypes.string.isRequired,
};
