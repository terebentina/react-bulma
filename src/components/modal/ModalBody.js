import React, { PropTypes } from 'react';

function ModalBody({ children, className }) {
  return (
    <section className={className}>
      {children}
    </section>
  );
}

ModalBody.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

ModalBody.defaultProps = {
  className: 'modal-card-body',
};

export default ModalBody;
