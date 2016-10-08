'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Control = require('./Control');

var _Control2 = _interopRequireDefault(_Control);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Select(_ref) {
  var value = _ref.value;
  var options = _ref.options;
  var name = _ref.name;
  var id = _ref.id;
  var label = _ref.label;
  var placeholder = _ref.placeholder;
  var expanded = _ref.expanded;
  var kind = _ref.kind;
  var size = _ref.size;
  var state = _ref.state;
  var message = _ref.message;
  var onChange = _ref.onChange;

  var otherProps = _objectWithoutProperties(_ref, ['value', 'options', 'name', 'id', 'label', 'placeholder', 'expanded', 'kind', 'size', 'state', 'message', 'onChange']);

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
  if (state == 'loading') {
    controlClassName += ' is-loading';
  }
  if (expanded) {
    inputClassName += ' is-expanded';
  }

  var parsedOptions = [];
  if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) == 'object') {
    parsedOptions = Object.keys(options).map(function (option) {
      return { key: option, title: options[option] };
    });
  } else {
    parsedOptions = options;
  }

  return _react2.default.createElement(
    _Control2.default,
    { className: controlClassName },
    label && _react2.default.createElement(
      'label',
      { className: 'label', htmlFor: id },
      label
    ),
    _react2.default.createElement(
      'span',
      { className: 'select' },
      _react2.default.createElement(
        'select',
        _extends({
          value: value,
          className: inputClassName,
          name: name,
          id: id,
          placeholder: placeholder,
          disabled: state == 'disabled',
          onChange: onChange
        }, otherProps),
        parsedOptions.map(function (_ref2) {
          var key = _ref2.key;
          var title = _ref2.title;
          return _react2.default.createElement(
            'option',
            { key: key, value: key },
            title
          );
        })
      )
    ),
    message && _react2.default.createElement(
      'span',
      { className: messageClassName },
      message
    )
  );
}

process.env.NODE_ENV !== "production" ? Select.propTypes = {
  value: _react.PropTypes.string.isRequired,
  options: _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.arrayOf(_react.PropTypes.object)]).isRequired,
  name: _react.PropTypes.string,
  id: _react.PropTypes.string,
  label: _react.PropTypes.string,
  placeholder: _react.PropTypes.string,
  expanded: _react.PropTypes.bool,
  kind: _react.PropTypes.oneOf(['primary', 'info', 'success', 'warning', 'danger']),
  size: _react.PropTypes.oneOf(['small', 'medium', 'large']),
  state: _react.PropTypes.oneOf(['loading', 'disabled']),
  message: _react.PropTypes.string,
  onChange: _react.PropTypes.func.isRequired
} : void 0;

exports.default = Select;
module.exports = exports['default'];