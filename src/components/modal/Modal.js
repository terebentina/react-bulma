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

  componentWillUpdate(nextProps) {
    if (!this.props.isActive && nextProps.isActive) {
      this.onShow();
    }
  }

  handleDocumentKeyUp = (e) => {
    console.log('keyup');
    if (e.keyCode === 27) {
      this.onClose();
    }
  };

  onShow = () => {
    const doc = ownerDocument(this);
    this._onDocumentKeyupListener = addEventListener(doc, 'keyup', this.handleDocumentKeyUp);
  };

  onClose = () => {
    this._onDocumentKeyupListener.remove();
    if (this.props.onClose) {
      this.props.onClose();
    }
  };

  render() {
    const { children, className, isActive, hasClose, hasBgClose } = this.props;

    return (
      <div className={classNames('modal', className, isActive && 'is-active')}>
        <div className="modal-background" onClick={hasBgClose && this.onClose} />
        {children}
        {hasClose && <button className="modal-close" onClick={this.onClose} /> }
      </div>
    );
  }
}

export default Modal;
