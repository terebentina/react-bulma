import React, { PropTypes } from 'react';

function Notification({ children, kind, hasClose }) {
  let cName = 'notification';
  if (kind) {
    cName += ` is-${kind}`;
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
  kind: PropTypes.oneOf(['primary', 'info', 'success', 'warning', 'danger']),
  hasClose: PropTypes.bool,
};

export default Notification;
