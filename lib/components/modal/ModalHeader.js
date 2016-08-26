"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ModalHeader(_ref) {
  var title = _ref.title;
  var hasClose = _ref.hasClose;
  var onClose = _ref.onClose;

  return _react2.default.createElement(
    "header",
    { className: "modal-card-head" },
    title && _react2.default.createElement(
      "p",
      { className: "modal-card-title" },
      title
    ),
    hasClose && _react2.default.createElement("button", { className: "delete", onClick: onClose })
  );
}

process.env.NODE_ENV !== "production" ? ModalHeader.propTypes = {
  title: _react.PropTypes.string,
  hasClose: _react.PropTypes.bool,
  onClose: _react.PropTypes.func
} : void 0;

exports.default = ModalHeader;
module.exports = exports["default"];