'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Control = require('./Control');

var _Control2 = _interopRequireDefault(_Control);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Input(_ref) {
  var value = _ref.value;
  var name = _ref.name;
  var id = _ref.id;
  var _ref$type = _ref.type;
  var type = _ref$type === undefined ? 'text' : _ref$type;
  var label = _ref.label;
  var placeholder = _ref.placeholder;
  var expanded = _ref.expanded;
  var kind = _ref.kind;
  var size = _ref.size;
  var state = _ref.state;
  var message = _ref.message;
  var icon = _ref.icon;
  var iconPosition = _ref.iconPosition;
  var onChange = _ref.onChange;

  var inputClassName = 'input';
  var controlClassName = '';
  var messageClassName = 'help';

  if (kind) {
    inputClassName += ' is-' + kind;
    messageClassName += ' is-' + kind;
  }
  if (size) {
    inputClassName += ' is-' + size;
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

  var input = _react2.default.createElement('input', {
    value: value,
    className: inputClassName,
    type: type,
    name: name,
    id: id,
    placeholder: placeholder,
    disabled: state == 'disabled',
    onChange: onChange
  });

  if (label) {
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'label',
        { className: 'label', htmlFor: id },
        label
      ),
      _react2.default.createElement(
        _Control2.default,
        { className: controlClassName },
        input,
        icon && _react2.default.createElement(_Icon2.default, { name: icon }),
        message && _react2.default.createElement(
          'span',
          { className: messageClassName },
          message
        )
      )
    );
  }

  return _react2.default.createElement(
    _Control2.default,
    { className: controlClassName },
    input,
    icon && _react2.default.createElement(_Icon2.default, { name: icon }),
    message && _react2.default.createElement(
      'span',
      { className: messageClassName },
      message
    )
  );
}

process.env.NODE_ENV !== "production" ? Input.propTypes = {
  value: _react.PropTypes.string,
  name: _react.PropTypes.string,
  id: _react.PropTypes.string,
  type: _react.PropTypes.string,
  label: _react.PropTypes.string,
  placeholder: _react.PropTypes.string,
  expanded: _react.PropTypes.bool,
  kind: _react.PropTypes.oneOf(['primary', 'info', 'success', 'warning', 'danger']),
  size: _react.PropTypes.oneOf(['small', 'medium', 'large']),
  state: _react.PropTypes.oneOf(['loading', 'disabled']),
  message: _react.PropTypes.string,
  icon: _react.PropTypes.any,
  iconPosition: _react.PropTypes.oneOf(['left', 'right']),
  onChange: _react.PropTypes.func.isRequired
} : void 0;

exports.default = Input;
module.exports = exports['default'];