import React, { PropTypes } from 'react';
import classNames from 'classnames';
import FontAwesome from 'react-fontawesome';

function Icon({ name, size }) {
  return (
    <span className={classNames('icon', size && `is-${size}`)}>
      <FontAwesome name={name} />
    </span>
  );
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

export default Icon;
