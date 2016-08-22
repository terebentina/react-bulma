import React, { PropTypes } from 'react';

function Notification({ children, type, hasClose }) {
  let cName = 'notification';
  if (type) {
    cName += ` is-${type}`;
  }

  return (
    <div className={cName}>
      {hasClose && <button className="delete" /> }
      {children}
    </div>
  );
}

Notification.propTypes = {
  children: PropTypes.any,
  type: PropTypes.oneOf(['primary', 'info', 'success', 'warning', 'danger']),
  hasClose: PropTypes.bool,
};

export default Notification;
