import React, { PropTypes } from 'react';
import Control from './Control';

function Select({ value, options, name, id, label, placeholder, expanded, kind, size, state, message, onChange, ...otherProps }) {
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
    parsedOptions = Object.keys(options).map((option) => ({ key: option, value: options[option] }));
  } else {
    parsedOptions = options;
  }

  return (
    <Control className={controlClassName}>
      {label && <label className="label" htmlFor={id}>{label}</label>}
      <span className="select">
        <select
          value={value}
          className={inputClassName}
          name={name}
          id={id}
          placeholder={placeholder}
          disabled={state == 'disabled'}
          onChange={onChange}
          {...otherProps}
        >
          {
            parsedOptions.map(({ key, val }) => <option value={key}>{val}</option>)
          }
        </select>
      </span>
      {message && <span className={messageClassName}>{message}</span>}
    </Control>
  );
}

Select.propTypes = {
  value: PropTypes.string.isRequired,
  options: PropTypes.oneOfType([PropTypes.object, PropTypes.arrayOf(PropTypes.object)]).isRequired,
  name: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  expanded: PropTypes.bool,
  kind: PropTypes.oneOf(['primary', 'info', 'success', 'warning', 'danger']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  state: PropTypes.oneOf(['loading', 'disabled']),
  message: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Select;
