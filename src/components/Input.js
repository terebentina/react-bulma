import React, { PropTypes } from 'react';
import Control from './Control';
import Icon from './Icon';

function Input({ value, name, id, label, placeholder, expanded, type, size, state, message, icon, iconPosition, onChange }) {
  let inputClassName = 'input';
  let controlClassName = '';
  let messageClassName = 'help';

  if (type) {
    inputClassName += ` is-${type}`;
    messageClassName += ` is-${type}`;
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

  const input = (
    <input
      value={value}
      className={inputClassName}
      type="text"
      name={name}
      id={id}
      placeholder={placeholder}
      disabled={state == 'disabled'}
      onChange={onChange}
    />
  );

  if (label) {
    return (
      <div>
        <label className="label" htmlFor={id}>{label}</label>
        <Control className={controlClassName}>
          {input}
          {icon && <Icon name={icon} />}
          {message && <span className={messageClassName}>{message}</span>}
        </Control>
      </div>
    );
  }

  return (
    <Control className={controlClassName}>
      {input}
      {icon && <Icon name={icon} />}
      {message && <span className={messageClassName}>{message}</span>}
    </Control>
  );
}

Input.propTypes = {
  value: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  expanded: PropTypes.bool,
  type: PropTypes.oneOf(['primary', 'info', 'success', 'warning', 'danger']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  state: PropTypes.oneOf(['loading', 'disabled']),
  message: PropTypes.string,
  icon: PropTypes.any,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  onChange: PropTypes.func.isRequired,
};

export default Input;