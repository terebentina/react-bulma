import React, { PropTypes } from 'react';

function Box({ children }) {
  return (
    <div className="box">
      {children}
    </div>
  );
}

Box.propTypes = {
  children: PropTypes.any,
};

export default Box;
