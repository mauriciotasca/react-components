// @flow
import React from 'react';
import classNames from 'classnames';
import { X, Frown } from 'react-feather';
import Modal from '../Modal';
import Button from '../Button';
import './style.scss';

type Props = {
  /** Boolean describing if the modal should be shown or not. */
  isOpen: boolean,
  /** Function that will be run when the modal is requested to be closed
   * (either by clicking on overlay or pressing ESC). */
  onClose: Function,
  /** String or FormattedMessage to display as Alert title. */
  title: string | React.Element,
  /** String or FormattedMessage to display as Alert content/discription. */
  description: string | React.Element,
  /** String className or Array of String classNames to be applied to the modal content. */
  classList?: tring | Array<string>,
  /** String to display as the confirm button text. */
  buttonLabel?: string,
  /** React component to display as icon. Default is a frown icon. */
  dialogIcon?: React.Element,
  /** String to describe alert type: `danger` or `warning`. */
  dialogType?: string,
  /** ARIA attributes to make your `Modal` more accessible.
   * Keys define the attributes you want to set (without the leading aria- prefix).
   * Ex. `{ describedby: 'full_description' }` will use the element with id `full_description`
   * to set a text alternative to the `aria-describedby` attribute.
   */
  ariaAttributes?: object,
};

const AlertModal = (props: Props) => {
  const {
    isOpen,
    onClose,
    title,
    description,
    classList,
    buttonLabel,
    dialogIcon,
    dialogType,
    ariaAttributes,
    ...rest
  } = props;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      classList={classNames('ac-modal--alert', classList)}
      contentLabel="Alert Modal"
      ariaAttributes={ariaAttributes}
      {...rest}
    >
      <div className="modal-content p-5">
        <div className="d-flex justify-content-end">
          <X className="clickable" onClick={onClose} />
        </div>

        <div className="d-flex flex-column text-center pt-5 pb-5">
          <div className={`ac-modal--alert__icon align-self-center text-${dialogType}`}>
            {dialogIcon}
          </div>
          <h2 className={`ac-modal--alert__title my-4 font-weight-bold text-${dialogType}`}>{title}</h2>
          <div className="ac-modal--alert__desc mt-3 h-25 overflow-auto">{description}</div>
        </div>

        <div className="mt-5 d-flex justify-content-center">
          <Button classList="ac-modal--alert__btn-close btn btn-outline-secondary" onClick={onClose}>{buttonLabel}</Button>
        </div>
      </div>
    </Modal>
  );
};

AlertModal.defaultProps = {
  classList: '',
  dialogIcon: <Frown className="feather-64" />,
  dialogType: 'danger',
  buttonLabel: 'OK',
  ariaAttributes: {},
};

AlertModal.displayName = 'AlertModal';

export default AlertModal;
