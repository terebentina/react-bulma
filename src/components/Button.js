import React, { PropTypes } from 'react';
import Icon from './Icon';

function Button({ children, type, size, style, state, icon, iconPosition }) {
  let className = 'button';
  if (type) {
    className += ` is-${type}`;
  }
  if (size) {
    className += ` is-${size}`;
  }
  if (style) {
    className += ` is-${style}`;
  }
  if (state) {
    className += ` is-${state}`;
  }

  return (
    <a className={className}>
      {iconPosition == 'left' && icon && <Icon name={icon} />}
      {children}
      {iconPosition == 'right' && icon && <Icon name={icon} />}
    </a>
  );
}

Button.propTypes = {
  children: PropTypes.any,
  type: PropTypes.oneOf(['primary', 'info', 'success', 'warning', 'danger', 'link']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  style: PropTypes.oneOf(['outlined', 'inverted']),
  state: PropTypes.oneOf(['loading', 'active', 'disabled']),
  icon: PropTypes.any,
  iconPosition: PropTypes.oneOf(['left', 'right']),
};

export default Button;
