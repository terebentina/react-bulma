import React, { PropTypes } from 'react';

function ModalContent({ children, className }) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}

ModalContent.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};

ModalContent.defaultProps = {
  className: 'modal-content',
};

export default ModalContent;
