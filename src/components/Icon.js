import React, { PropTypes } from 'react';
import classNames from 'classnames';

function Icon({ name, size }) {
  return (
    <span className={classNames('icon', size && `is-${size}`)}>
      <i className={`fa fa-${name}`} />
    </span>
  );
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

export default Icon;
