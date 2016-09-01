'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactFontawesome = require('react-fontawesome');

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Icon(_ref) {
  var name = _ref.name;
  var size = _ref.size;

  return _react2.default.createElement(
    'span',
    { className: (0, _classnames2.default)('icon', size && 'is-' + size) },
    _react2.default.createElement(_reactFontawesome2.default, { name: name })
  );
}

process.env.NODE_ENV !== "production" ? Icon.propTypes = {
  name: _react.PropTypes.string.isRequired,
  size: _react.PropTypes.oneOf(['small', 'medium', 'large'])
} : void 0;

exports.default = Icon;
module.exports = exports['default'];