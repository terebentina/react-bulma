'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Control = require('./Control');

var _Control2 = _interopRequireDefault(_Control);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Select(_ref) {
  var children = _ref.children;
  var id = _ref.id;
  var label = _ref.label;
  var expanded = _ref.expanded;
  var kind = _ref.kind;
  var size = _ref.size;
  var state = _ref.state;
  var message = _ref.message;

  var otherProps = _objectWithoutProperties(_ref, ['children', 'id', 'label', 'expanded', 'kind', 'size', 'state', 'message']);

  var selectClassName = 'select';
  var controlClassName = '';
  var messageClassName = 'help';

  if (kind) {
    selectClassName += ' is-' + kind;
    messageClassName += ' is-' + kind;
  }
  if (size) {
    selectClassName += ' is-' + size;
  }
  if (state == 'loading') {
    controlClassName += ' is-loading';
  }
  if (expanded) {
    selectClassName += ' is-expanded';
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
      { className: selectClassName },
      _react2.default.createElement(
        'select',
        _extends({
          id: id,
          disabled: state == 'disabled'
        }, otherProps),
        children
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
  children: _react.PropTypes.node,
  id: _react.PropTypes.string,
  label: _react.PropTypes.string,
  expanded: _react.PropTypes.bool,
  kind: _react.PropTypes.oneOf(['primary', 'info', 'success', 'warning', 'danger']),
  size: _react.PropTypes.oneOf(['small', 'medium', 'large']),
  state: _react.PropTypes.oneOf(['loading', 'disabled']),
  message: _react.PropTypes.string
} : void 0;

exports.default = Select;
module.exports = exports['default'];