'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Control(_ref) {
  var children = _ref.children;
  var className = _ref.className;
  var type = _ref.type;
  var addonPosition = _ref.addonPosition;

  var cName = 'control';
  if (type == 'group') {
    cName += ' is-grouped';
  } else if (type == 'addons') {
    cName += ' has-addons';
  }
  if (className) {
    cName += ' ' + className;
  }
  if (addonPosition && addonPosition != 'left') {
    cName += ' has-addons-' + addonPosition;
  }

  return _react2.default.createElement(
    'div',
    { className: cName },
    children
  );
}

process.env.NODE_ENV !== "production" ? Control.propTypes = {
  children: _react.PropTypes.node,
  className: _react.PropTypes.string,
  type: _react.PropTypes.oneOf(['group', 'addons']),
  addonPosition: _react.PropTypes.oneOf(['left', 'centered', 'right'])
} : void 0;

exports.default = Control;
module.exports = exports['default'];