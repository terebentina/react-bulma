'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Link(_ref) {
  var _classNames;

  var children = _ref.children;
  var className = _ref.className;
  var kind = _ref.kind;
  var size = _ref.size;
  var style = _ref.style;
  var state = _ref.state;
  var icon = _ref.icon;
  var iconPosition = _ref.iconPosition;

  var cName = (0, _classnames2.default)('button', className, (_classNames = {}, _classNames['is-' + kind] = kind, _classNames['is-' + size] = size, _classNames['is-' + style] = style, _classNames['is-' + state] = state, _classNames));

  return _react2.default.createElement(
    'a',
    { className: cName },
    (!iconPosition || iconPosition == 'left') && icon && _react2.default.createElement(_Icon2.default, { name: icon }),
    children,
    iconPosition == 'right' && icon && _react2.default.createElement(_Icon2.default, { name: icon })
  );
}

process.env.NODE_ENV !== "production" ? Link.propTypes = {
  children: _react.PropTypes.any,
  className: _react.PropTypes.string,
  kind: _react.PropTypes.oneOf(['primary', 'info', 'success', 'warning', 'danger', 'link']),
  size: _react.PropTypes.oneOf(['small', 'medium', 'large']),
  style: _react.PropTypes.oneOf(['outlined', 'inverted']),
  state: _react.PropTypes.oneOf(['loading', 'active', 'disabled']),
  icon: _react.PropTypes.string,
  iconPosition: _react.PropTypes.oneOf(['left', 'right'])
} : void 0;

exports.default = Link;
module.exports = exports['default'];