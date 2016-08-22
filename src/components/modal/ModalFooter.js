import React, { PropTypes } from 'react';

function ModalFooter({ children, className }) {
  return (
    <footer className={className}>
      {children}
    </footer>
  );
}

ModalFooter.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};

ModalFooter.defaultProps = {
  className: 'modal-card-foot',
};

export default ModalFooter;
