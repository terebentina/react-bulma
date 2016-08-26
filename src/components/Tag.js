import React, { PropTypes } from 'react';

function Tag({ children, kind, size, hasClose }) {
  let className = 'tag';
  if (kind) {
    className += ` is-${kind}`;
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
  kind: PropTypes.oneOf(['dark', 'primary', 'info', 'success', 'warning', 'danger']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  hasClose: PropTypes.bool,
};

export default Tag;
