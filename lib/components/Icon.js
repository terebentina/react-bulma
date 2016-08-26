'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Icon(_ref) {
  var name = _ref.name;
  var size = _ref.size;

  var cName = 'icon';
  if (size) {
    cName += ' is-' + size;
  }

  return _react2.default.createElement(
    'span',
    { className: cName },
    _react2.default.createElement('i', { className: 'fa fa-' + name })
  );
}

process.env.NODE_ENV !== "production" ? Icon.propTypes = {
  name: _react.PropTypes.string.isRequired,
  size: _react.PropTypes.oneOf(['small', 'medium', 'large'])
} : void 0;

exports.default = Icon;
module.exports = exports['default'];