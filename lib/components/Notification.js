'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Notification(_ref) {
  var children = _ref.children;
  var kind = _ref.kind;
  var hasClose = _ref.hasClose;

  var cName = 'notification';
  if (kind) {
    cName += ' is-' + kind;
  }

  return _react2.default.createElement(
    'div',
    { className: cName },
    hasClose && _react2.default.createElement('button', { className: 'delete' }),
    children
  );
}

process.env.NODE_ENV !== "production" ? Notification.propTypes = {
  children: _react.PropTypes.any,
  kind: _react.PropTypes.oneOf(['primary', 'info', 'success', 'warning', 'danger']),
  hasClose: _react.PropTypes.bool
} : void 0;

exports.default = Notification;
module.exports = exports['default'];