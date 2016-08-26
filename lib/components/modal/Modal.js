'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _addEventListener = require('../../utils/addEventListener');

var _addEventListener2 = _interopRequireDefault(_addEventListener);

var _ownerDocument = require('../../utils/ownerDocument');

var _ownerDocument2 = _interopRequireDefault(_ownerDocument);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Modal = function (_PureComponent) {
  _inherits(Modal, _PureComponent);

  function Modal() {
    var _temp, _this, _ret;

    _classCallCheck(this, Modal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _PureComponent.call.apply(_PureComponent, [this].concat(args))), _this), _this.handleDocumentKeyUp = function (e) {
      if (e.keyCode === 27) {
        _this.onClose();
      }
    }, _this.onShow = function () {
      var doc = (0, _ownerDocument2.default)(_this);
      _this._onDocumentKeyupListener = (0, _addEventListener2.default)(doc, 'keyup', _this.handleDocumentKeyUp);
    }, _this.onClose = function () {
      _this._onDocumentKeyupListener.remove();
      if (_this.props.onClose) {
        _this.props.onClose();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Modal.prototype.componentWillUpdate = function componentWillUpdate(nextProps) {
    if (!this.props.isActive && nextProps.isActive) {
      this.onShow();
    }
  };

  Modal.prototype.render = function render() {
    var _props = this.props;
    var children = _props.children;
    var className = _props.className;
    var isActive = _props.isActive;
    var hasClose = _props.hasClose;
    var hasBgClose = _props.hasBgClose;


    return _react2.default.createElement(
      'div',
      { className: (0, _classnames2.default)('modal', className, isActive && 'is-active') },
      _react2.default.createElement('div', { className: 'modal-background', onClick: hasBgClose && this.onClose }),
      children,
      hasClose && _react2.default.createElement('button', { className: 'modal-close', onClick: this.onClose })
    );
  };

  return Modal;
}(_react.PureComponent);

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