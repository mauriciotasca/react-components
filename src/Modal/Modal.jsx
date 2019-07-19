// @flow
import React from 'react';
import ReactModal from 'react-modal';
import classNames from 'classnames';
import './style.scss';

type Props = {
  /** Boolean describing if the modal should be shown or not. */
  isOpen: boolean,
  /** Function that will be run when the modal is requested to be closed
   * (either by clicking on overlay or pressing ESC). */
  onClose: Function,
  /** String className or Array of String classNames to be applied to the modal content. */
  classList?: string | Array<string>,
  /** HTML content or React component with the contents of the modal. */
  children?: any,
  /** String indicating how the content container should be announced to screenreaders. */
  contentLabel: string,
  /** ARIA attributes to make your `Modal` more accessible.
   * Keys define the attributes you want to set (without the leading aria- prefix).
   * Ex. `{ describedby: 'full_description' }` will use the element with id `full_description`
   * to set a text alternative to the `aria-describedby` attribute.
   */
  ariaAttributes?: object,
};

const Modal = (props: Props) => {
  const {
    isOpen,
    onClose,
    classList,
    children,
    contentLabel,
    ariaAttributes,
    ...rest
  } = props;

  const styles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
      zIndex: '2',
    },
  };

  return (
    <ReactModal
      ariaHideApp={false}
      isOpen={isOpen}
      onRequestClose={onClose}
      shouldCloseOnOverlayClick
      closeTimeoutMS={400}
      className={classNames('modal-dialog', 'modal-dialog-centered', 'ac-modal', classList)}
      style={styles}
      contentLabel={contentLabel}
      aria={ariaAttributes}
      {...rest}
    >
      {children}
    </ReactModal>
  );
};

Modal.defaultProps = {
  classList: '',
  children: null,
  ariaAttributes: {},
};

export default Modal;
