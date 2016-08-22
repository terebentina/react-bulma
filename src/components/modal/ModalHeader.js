import React, { PropTypes } from 'react';

function ModalHeader({ title, hasClose, onClose }) {
  return (
    <header className="modal-card-head">
      {title && <p className="modal-card-title">{title}</p>}
      {hasClose && <button className="delete" onClick={onClose} />}
    </header>
  );
}

ModalHeader.propTypes = {
  title: PropTypes.string,
  hasClose: PropTypes.bool,
  onClose: PropTypes.func,
};

export default ModalHeader;
