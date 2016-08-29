import React, { PropTypes } from 'react';
import classNames from 'classnames';
import Icon from './Icon';

function Link({ children, href, className, kind, size, style, state, icon, iconPosition }) {
  const cName = classNames(
    'button',
    className,
    {
      [`is-${kind}`]: kind,
      [`is-${size}`]: size,
      [`is-${style}`]: style,
      [`is-${state}`]: state,
    }
  );

  return (
    <a className={cName} href={href}>
      {(!iconPosition || iconPosition == 'left') && icon && <Icon name={icon} />}
      {children}
      {iconPosition == 'right' && icon && <Icon name={icon} />}
    </a>
  );
}

Link.propTypes = {
  children: PropTypes.any,
  href: PropTypes.string,
  className: PropTypes.string,
  kind: PropTypes.oneOf(['primary', 'info', 'success', 'warning', 'danger', 'link']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  style: PropTypes.oneOf(['outlined', 'inverted']),
  state: PropTypes.oneOf(['loading', 'active', 'disabled']),
  icon: PropTypes.string,
  iconPosition: PropTypes.oneOf(['left', 'right']),
};

export default Link;
