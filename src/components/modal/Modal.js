import React, { PropTypes } from 'react';
import classNames from 'classnames';

function Modal({ children, className, isActive, hasClose, hasBgClose, onClose }) {
  return (
    <div className={classNames('modal', className, isActive && 'is-active')}>
      <div className="modal-background" onClick={hasBgClose && onClose} />
      {children}
      {hasClose && <button className="modal-close" onClick={onClose} /> }
    </div>
  );
}

Modal.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  isActive: PropTypes.bool,
  hasClose: PropTypes.bool,
  hasBgClose: PropTypes.bool,
  onClose: PropTypes.func,
};

export default Modal;
