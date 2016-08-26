'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Tag(_ref) {
  var children = _ref.children;
  var type = _ref.type;
  var size = _ref.size;
  var hasClose = _ref.hasClose;

  var className = 'tag';
  if (type) {
    className += ' is-' + type;
  }
  if (size) {
    className += ' is-' + size;
  }

  return _react2.default.createElement(
    'span',
    { className: className },
    children,
    hasClose && _react2.default.createElement('button', { className: 'delete' })
  );
}

process.env.NODE_ENV !== "production" ? Tag.propTypes = {
  children: _react.PropTypes.any,
  type: _react.PropTypes.oneOf(['dark', 'primary', 'info', 'success', 'warning', 'danger']),
  size: _react.PropTypes.oneOf(['small', 'medium', 'large']),
  hasClose: _react.PropTypes.bool
} : void 0;

exports.default = Tag;
module.exports = exports['default'];