import React, { PropTypes } from 'react';

function Icon({ name, size }) {
  let cName = 'icon';
  if (size) {
    cName += ` is-${size}`;
  }

  return (
    <span className={cName}>
      <i className={`fa fa-${name}`} />
    </span>
  );
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

export default Icon;
