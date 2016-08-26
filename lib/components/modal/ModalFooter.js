'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ModalFooter(_ref) {
  var children = _ref.children;
  var className = _ref.className;

  return _react2.default.createElement(
    'footer',
    { className: className },
    children
  );
}

process.env.NODE_ENV !== "production" ? ModalFooter.propTypes = {
  children: _react.PropTypes.any,
  className: _react.PropTypes.string
} : void 0;

ModalFooter.defaultProps = {
  className: 'modal-card-foot'
};

exports.default = ModalFooter;
module.exports = exports['default'];