import React, { PropTypes } from 'react';
import Control from './Control';

function Select({ children, id, label, expanded, kind, size, state, message, ...otherProps }) {
  let selectClassName = 'select';
  let controlClassName = '';
  let messageClassName = 'help';

  if (kind) {
    selectClassName += ` is-${kind}`;
    messageClassName += ` is-${kind}`;
  }
  if (size) {
    selectClassName += ` is-${size}`;
  }
  if (state == 'loading') {
    controlClassName += ' is-loading';
  }
  if (expanded) {
    selectClassName += ' is-expanded';
  }

  return (
    <Control className={controlClassName}>
      {label && <label className="label" htmlFor={id}>{label}</label>}
      <span className={selectClassName}>
        <select
          id={id}
          disabled={state == 'disabled'}
          {...otherProps}
        >
          {children}
        </select>
      </span>
      {message && <span className={messageClassName}>{message}</span>}
    </Control>
  );
}

Select.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  label: PropTypes.string,
  expanded: PropTypes.bool,
  kind: PropTypes.oneOf(['primary', 'info', 'success', 'warning', 'danger']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  state: PropTypes.oneOf(['loading', 'disabled']),
  message: PropTypes.string,
};

export default Select;
