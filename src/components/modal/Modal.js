import React, { PureComponent, PropTypes } from 'react';
import classNames from 'classnames';
import addEventListener from '../../utils/addEventListener';
import ownerDocument from '../../utils/ownerDocument';

class Modal extends PureComponent {
  static propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    isActive: PropTypes.bool,
    hasClose: PropTypes.bool,
    hasBgClose: PropTypes.bool,
    onClose: PropTypes.func,
  };

  componentDidMount() {
    if (this.props.isActive) {
      this.onShow();
    }
  }

  componentWillUpdate(nextProps) {
    if (!this.props.isActive && nextProps.isActive) {
      this.onShow();
    }
  }

  handleDocumentKeyUp = (e) => {
    if (e.keyCode === 27) {
      this.onClose();
    }
  };

  onShow = () => {
    if (this.props.hasClose) {
      const doc = ownerDocument(this);
      this._onDocumentKeyupListener = addEventListener(doc, 'keyup', this.handleDocumentKeyUp);
    }
  };

  onClose = () => {
    if (this._onDocumentKeyupListener) {
      this._onDocumentKeyupListener.remove();
    }
    if (this.props.onClose) {
      this.props.onClose();
    }
  };

  render() {
    const { children, className, isActive, hasBgClose } = this.props;

    return (
      <div className={classNames('modal', className, isActive && 'is-active')}>
        <div className="modal-background" onClick={hasBgClose && this.onClose} />
        {children}
      </div>
    );
  }
}

export default Modal;
