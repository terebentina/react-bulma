import React, { PropTypes } from 'react';
import Control from './Control';

function Select({ options, id, label, expanded, kind, size, state, message, ...otherProps }) {
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
  if (state == 'loading') {
    controlClassName += ' is-loading';
  }
  if (expanded) {
    inputClassName += ' is-expanded';
  }

  let parsedOptions = [];
  if (typeof options == 'object') {
    parsedOptions = Object.keys(options).map((option) => ({ value: option, title: options[option] }));
  } else {
    parsedOptions = options;
  }

  return (
    <Control className={controlClassName}>
      {label && <label className="label" htmlFor={id}>{label}</label>}
      <span className="select">
        <select
          className={inputClassName}
          id={id}
          disabled={state == 'disabled'}
          {...otherProps}
        >
          {
            parsedOptions.map(({ value, title }, idx) => <option key={idx} value={value}>{title}</option>)
          }
        </select>
      </span>
      {message && <span className={messageClassName}>{message}</span>}
    </Control>
  );
}

Select.propTypes = {
  options: PropTypes.oneOfType([PropTypes.object, PropTypes.arrayOf(PropTypes.object)]).isRequired,
  id: PropTypes.string,
  label: PropTypes.string,
  expanded: PropTypes.bool,
  kind: PropTypes.oneOf(['primary', 'info', 'success', 'warning', 'danger']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  state: PropTypes.oneOf(['loading', 'disabled']),
  message: PropTypes.string,
};

export default Select;
