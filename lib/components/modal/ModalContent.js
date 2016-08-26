'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ModalContent(_ref) {
  var children = _ref.children;
  var className = _ref.className;

  return _react2.default.createElement(
    'div',
    { className: className },
    children
  );
}

process.env.NODE_ENV !== "production" ? ModalContent.propTypes = {
  children: _react.PropTypes.any,
  className: _react.PropTypes.string
} : void 0;

ModalContent.defaultProps = {
  className: 'modal-content'
};

exports.default = ModalContent;
module.exports = exports['default'];