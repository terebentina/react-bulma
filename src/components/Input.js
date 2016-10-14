import React, { PropTypes } from 'react';
import Control from './Control';
import Icon from './Icon';

function Input({ id, label, expanded, kind, size, state, message, icon, iconPosition, ...otherProps }) {
  let inputClassName = 'input';
  let controlClassName = '';
  let messageClassName = 'help';

  if (kind) {
    inputClassName += ` is-${kind}`;
    messageClassName += ` is-${kind}`;
  }
  if (size) {
    inputClassName += ` is-${size}`;
  }
  if (icon) {
    controlClassName += ' has-icon';
    if (iconPosition == 'right') {
      controlClassName += ' has-icon-right';
    }
  }
  if (state == 'loading') {
    controlClassName += ' is-loading';
  }
  if (expanded) {
    inputClassName += ' is-expanded';
  }

  return (
    <Control className={controlClassName}>
      {label && <label className="label" htmlFor={id}>{label}</label>}
      <input
        className={inputClassName}
        id={id}
        disabled={state == 'disabled'}
        {...otherProps}
      />
      {icon && <Icon name={icon} />}
      {message && <span className={messageClassName}>{message}</span>}
    </Control>
  );
}

Input.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  expanded: PropTypes.bool,
  kind: PropTypes.oneOf(['primary', 'info', 'success', 'warning', 'danger']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  state: PropTypes.oneOf(['loading', 'disabled']),
  message: PropTypes.string,
  icon: PropTypes.node,
  iconPosition: PropTypes.oneOf(['left', 'right']),
};

export default Input;
