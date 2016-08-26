"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Box(_ref) {
  var children = _ref.children;

  return _react2.default.createElement(
    "div",
    { className: "box" },
    children
  );
}

process.env.NODE_ENV !== "production" ? Box.propTypes = {
  children: _react.PropTypes.any
} : void 0;

exports.default = Box;
module.exports = exports["default"];