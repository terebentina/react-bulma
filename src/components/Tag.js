import React, { PropTypes } from 'react';

function Tag({ children, type, size, hasClose }) {
  let className = 'tag';
  if (type) {
    className += ` is-${type}`;
  }
  if (size) {
    className += ` is-${size}`;
  }

  return (
    <span className={className}>
      {children}
      {hasClose && <button className="delete" /> }
    </span>
  );
}

Tag.propTypes = {
  children: PropTypes.any,
  type: PropTypes.oneOf(['dark', 'primary', 'info', 'success', 'warning', 'danger']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  hasClose: PropTypes.bool,
};

export default Tag;
