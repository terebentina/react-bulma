'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Modal(_ref) {
  var children = _ref.children;
  var className = _ref.className;
  var isActive = _ref.isActive;
  var hasClose = _ref.hasClose;
  var hasBgClose = _ref.hasBgClose;
  var onClose = _ref.onClose;

  return _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)('modal', className, isActive && 'is-active') },
    _react2.default.createElement('div', { className: 'modal-background', onClick: hasBgClose && onClose }),
    children,
    hasClose && _react2.default.createElement('button', { className: 'modal-close', onClick: onClose })
  );
}

process.env.NODE_ENV !== "production" ? Modal.propTypes = {
  children: _react.PropTypes.any,
  className: _react.PropTypes.string,
  isActive: _react.PropTypes.bool,
  hasClose: _react.PropTypes.bool,
  hasBgClose: _react.PropTypes.bool,
  onClose: _react.PropTypes.func
} : void 0;

exports.default = Modal;
module.exports = exports['default'];