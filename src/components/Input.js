import React, { PropTypes } from 'react';
import Control from './Control';
import Icon from './Icon';

function Input({ value, name, id, type = 'text', label, placeholder, expanded, kind, size, state, message, icon, iconPosition, onChange, ...otherProps }) {
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
        value={value || ''}
        className={inputClassName}
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        disabled={state == 'disabled'}
        onChange={onChange}
        {...otherProps}
      />
      {icon && <Icon name={icon} />}
      {message && <span className={messageClassName}>{message}</span>}
    </Control>
  );
}

Input.propTypes = {
  value: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  expanded: PropTypes.bool,
  kind: PropTypes.oneOf(['primary', 'info', 'success', 'warning', 'danger']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  state: PropTypes.oneOf(['loading', 'disabled']),
  message: PropTypes.string,
  icon: PropTypes.node,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  onChange: PropTypes.func,
};

export default Input;
