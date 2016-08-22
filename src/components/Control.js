import React, { PropTypes } from 'react';

function Control({ children, className, type, addonPosition }) {
  let cName = 'control';
  if (type == 'group') {
    cName += ' is-grouped';
  } else if (type == 'addons') {
    cName += ' has-addons';
  }
  if (className) {
    cName += ` ${className}`;
  }
  if (addonPosition && addonPosition != 'left') {
    cName += ` has-addons-${addonPosition}`;
  }

  return (
    <div className={cName}>
      {children}
    </div>
  );
}

Control.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  type: PropTypes.oneOf(['group', 'addons']),
  addonPosition: PropTypes.oneOf(['left', 'centered', 'right']),
};

export default Control;
